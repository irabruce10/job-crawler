const { createClient } = require('@supabase/supabase-js');
const jobs = require('../data/jobs.json');

const supabase = createClient(
  'https://srkelzwjdqxjxsuujxjj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2VsendqZHF4anhzdXVqeGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzA3MjYsImV4cCI6MjA2NTA0NjcyNn0.KuwFu01ODUtoQsb6olafK_OqVve7UtUAzZVBb6Sg2ng',
);

async function pushJobs() {
  for (const job of jobs) {
    const { error } = await supabase.from('jobs').insert([job]);
    if (error) console.error('Error inserting job:', error);
  }
}

module.exports = pushJobs;
