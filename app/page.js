'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then(setJobs)
      .catch((err) => console.error('Failed to fetch jobs:', err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Latest Jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs found at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="border p-4 rounded">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium"
              >
                {job.title} @ {job.company}
              </a>
              <p className="text-sm text-gray-700">{job.location}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
