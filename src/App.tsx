import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Museum from "./pages/Museum";
import AddExhibit from "./pages/AddExhibit";
import Favorites from "./pages/Favorites";

import type { Exhibit } from "./types";

export default function App() {
  const [exhibits, setExhibits] = useState<Exhibit[]>(() => {
    const saved = localStorage.getItem("exhibits");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Мона Ліза",
            description: "Картина Леонардо да Вінчі.",
            favorite: false,
          },
          {
            id: 2,
            title: "Венера Мілоська",
            description: "Давньогрецька мармурова скульптура.",
            favorite: false,
          },
          {
            id: 3,
            title: "Зоряна ніч",
            description: "Картина Вінсента ван Гога.",
            favorite: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("exhibits", JSON.stringify(exhibits));
  }, [exhibits]);

  function addExhibit(exhibit: Exhibit) {
    setExhibits((prev) => [...prev, exhibit]);
  }

  function deleteExhibit(id: number) {
    setExhibits((prev) => prev.filter((exhibit) => exhibit.id !== id));
  }

  function toggleFavorite(id: number) {
    setExhibits((prev) =>
      prev.map((exhibit) =>
        exhibit.id === id
          ? { ...exhibit, favorite: !exhibit.favorite }
          : exhibit,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200">
      <header className="border-b border-neutral-700">
        <div className="max-w-4xl mx-auto px-5 py-4">
          <h1 className="text-xl font-semibold mb-3">DIGITAL MUSEUM</h1>

          <nav className="flex gap-6 text-neutral-400">
            <Link to="/" className="hover:text-white">
              Експонати
            </Link>

            <Link to="/add" className="hover:text-white">
              Додати
            </Link>

            <Link to="/favorites" className="hover:text-white">
              Обране
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-6">
        <Routes>
          <Route
            path="/"
            element={
              <Museum
                exhibits={exhibits}
                onDelete={deleteExhibit}
                onFavorite={toggleFavorite}
              />
            }
          />

          <Route path="/add" element={<AddExhibit onAdd={addExhibit} />} />

          <Route
            path="/favorites"
            element={
              <Favorites exhibits={exhibits} onFavorite={toggleFavorite} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
