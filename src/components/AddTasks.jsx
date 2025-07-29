import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-6 space-y-5 bg-white rounded-xl shadow-lg">
        {/* Campo Título */}
        <input
          type="text"
          placeholder="Título da Tarefa"
          className="w-full border border-slate-300 rounded-md px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Campo Descrição */}
        <input
          type="text"
          placeholder="Descrição da Tarefa"
          className="w-full border border-slate-300 rounded-md px-4 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Botão Adicionar */}
        <button
          className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold px-4 py-2 rounded-md transition"
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("Preencha todos os campos!");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
        >
          ➕ Adicionar Tarefa
        </button>
      </div>
    </>
  );
}

export default AddTasks;
