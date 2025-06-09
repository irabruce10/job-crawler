import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://srkelzwjdqxjxsuujxjj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2VsendqZHF4anhzdXVqeGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzA3MjYsImV4cCI6MjA2NTA0NjcyNn0.KuwFu01ODUtoQsb6olafK_OqVve7UtUAzZVBb6Sg2ng';
export const supabase = createClient(supabaseUrl, supabaseKey);
