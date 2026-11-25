import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { Exhibit } from "../types";

interface Props {
  onAdd: (exhibit: Exhibit) => void;
}

export default function AddExhibit({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      title,
      description,
      favorite: false,
    });

    navigate("/");
  }

  return (
    <div>
      <h1 className="text-2xl mb-5">Додати експонат</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
        <label>Назва експоната</label>

        <input
          className="bg-neutral-800 border border-neutral-600 p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Опис</label>

        <textarea
          className="bg-neutral-800 border border-neutral-600 p-2 h-28"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-neutral-200 text-neutral-900 p-2 cursor-pointer"
        >
          Додати
        </button>
      </form>
    </div>
  );
}
