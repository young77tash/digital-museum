import type { Exhibit } from "../types";

interface Props {
  exhibits: Exhibit[];
  onFavorite: (id: number) => void;
}

export default function Favorites({ exhibits, onFavorite }: Props) {
  const favorites = exhibits.filter((exhibit) => exhibit.favorite);

  return (
    <div>
      <h1 className="text-2xl mb-5">Обрані експонати</h1>

      {favorites.map((exhibit) => (
        <div key={exhibit.id} className="border-b border-neutral-700 py-4">
          <h2 className="text-lg">{exhibit.title}</h2>

          <p className="text-neutral-400 my-2">{exhibit.description}</p>

          <button
            className="border border-neutral-600 px-3 py-1 cursor-pointer"
            onClick={() => onFavorite(exhibit.id)}
          >
            Прибрати з обраного
          </button>
        </div>
      ))}

      {favorites.length === 0 && <p>Немає обраних експонатів</p>}
    </div>
  );
}
