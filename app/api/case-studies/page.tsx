import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import { Suspense } from 'react';
import SearchBar from '../../components/SearchBar';

// Server Component: Fetch data
async function getCaseStudies() {
  const filePath = path.join(process.cwd(), 'app/api/case-studies.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Case Studies</h1>
      {/* Client-side search bar */}
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchBar caseStudies={caseStudies} />
      </Suspense>
    </main>
  );
}
