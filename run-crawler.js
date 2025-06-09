const scrapeJobs = require('./crawler/puppeteer');
const pushJobs = require('./crawler/pushToSupabase');

(async () => {
  try {
    await scrapeJobs();
    console.log('✅ Scraping done.');
    await pushJobs();

    console.log(`✅ Pushed ${jobs.length} jobs to Supabase`);
  } catch (error) {
    console.error('Error scraping jobs:', error);
  }
})();
