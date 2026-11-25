"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const text = query.trim();
    if (!text) return;
    router.push(`/products/search/${encodeURIComponent(text)}`);
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Buscar productos..."
        className="flex-1 rounded-xl border border-gray-600 bg-transparent px-4 py-2"
      />
      <button
        onClick={handleSearch}
        className="rounded-xl bg-blue-500 px-4 py-2 text-white font-medium"
      >
        Buscar
      </button>
    </div>
  );
}