"use client";
import { useState } from "react";
import Image from "next/image";
import { CaseStudy } from "../types/caseStudy";


interface SearchBarProps {
  caseStudies: CaseStudy[];
}

export default function SearchBar({ caseStudies }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const filtered = caseStudies.filter((cs: CaseStudy) =>
    cs.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filtered.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No se encontraron estudios de caso.</p>
        )}

        {filtered.map((cs: CaseStudy) => (
          <a key={cs.id} target="_blank" className="block bg-white rounded shadow hover:shadow-lg transition">
            <Image src={cs.image} alt={cs.title} width={600} height={192} className="w-full h-48 object-cover rounded-t" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{cs.title}</h2>
              <p className="text-gray-600 text-sm">{cs.description}</p>
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}
