const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeJobs() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/chromium', // adjust this if needed
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto('https://remoteok.com', {
    waitUntil: 'networkidle2',
  });

  const jobs = await page.evaluate(() => {
    const jobElements = document.querySelectorAll('.job');
    const data = [];

    jobElements.forEach((job) => {
      const title = job.querySelector('h2')?.innerText.trim();
      const company = job.querySelector('.companyLink h3')?.innerText.trim();
      const location = job.querySelector('.location')?.innerText.trim();
      const link = 'https://remoteok.com' + job.getAttribute('data-href');

      if (title && company) {
        data.push({ title, company, location, link });
      }
    });

    return data;
  });

  await browser.close();

  console.log('jobs', jobs);
  fs.writeFileSync('./data/jobs.json', JSON.stringify(jobs, null, 2));
  return jobs;
}

module.exports = scrapeJobs;
