
import SearchBar from '../components/SearchBar';
import { getCaseStudies } from '../lib/getCaseStudies';

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Case Studies</h1>
      <SearchBar caseStudies={caseStudies} />
    </main>
  );
}
