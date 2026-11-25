import { useState } from "react";
import type { Exhibit } from "../types";

interface Props {
  exhibits: Exhibit[];
  onDelete: (id: number) => void;
  onFavorite: (id: number) => void;
}

export default function Museum({ exhibits, onDelete, onFavorite }: Props) {
  const [search, setSearch] = useState("");

  const filtered = exhibits.filter((exhibit) =>
    exhibit.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-2xl mb-2">Експонати музею</h1>

      <p className="text-neutral-400 mb-5">
        Усього експонатів: {exhibits.length}
      </p>

      <input
        className="bg-neutral-800 border border-neutral-600 p-2 w-full mb-5"
        placeholder="Пошук експоната..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((exhibit) => (
        <div key={exhibit.id} className="border-b border-neutral-700 py-4">
          <h2 className="text-lg">{exhibit.title}</h2>

          <p className="text-neutral-400 my-2">{exhibit.description}</p>

          <div className="flex gap-2">
            <button
              className="border border-neutral-600 px-3 py-1 cursor-pointer"
              onClick={() => onFavorite(exhibit.id)}
            >
              {exhibit.favorite ? "З обраного" : "В обране"}
            </button>

            <button
              className="text-red-400 px-3 py-1 cursor-pointer"
              onClick={() => onDelete(exhibit.id)}
            >
              Видалити
            </button>
          </div>
        </div>
      ))}

      {filtered.length === 0 && <p>Експонатів не знайдено</p>}
    </div>
  );
}
