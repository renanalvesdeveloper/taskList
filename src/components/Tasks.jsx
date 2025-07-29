import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, OnDeleteTaskClick, OnTaskClick }) {
  //console.log(props);
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <>
      <ul className="space-y-4 p-4 sm:p-6 bg-slate-100 rounded-md shadow-lg w-full max-w-3xl mx-auto transition duration-300">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 bg-white p-4 rounded-md shadow hover:shadow-md transition"
          >
            {/* Título da tarefa */}
            <button
              onClick={() => OnTaskClick(task.id)}
              className={`flex-1 text-left text-slate-800 font-medium hover:text-slate-600 transition ${
                task.isCompleted ? "line-through opacity-70" : ""
              }`}
            >
              {task.title}
            </button>

            {/* Botões de ação */}
            <div className="flex gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition"
                onClick={() => onSeeDetailsClick(task)}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>

              <button
                onClick={() => OnDeleteTaskClick(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
