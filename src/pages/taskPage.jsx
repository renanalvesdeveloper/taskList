import { useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-slate-500 px-4 py-6">
        <div className="w-full space-y-4 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center relative mb-6">
            <button
              className="absolute left-0 top-0 transition-transform duration-300 hover:-translate-x-1"
              onClick={() => navigate(-1)}
            >
              <ChevronLeftIcon className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <h1 className="text-3xl sm:text-4xl text-slate-100 font-bold text-center mt-4 sm:mt-0">
              Detalhes da Tarefa
            </h1>
          </div>
          <div className="space-y-4 p-4 sm:p-6 bg-slate-200 rounded-md shadow w-full max-w-2xl mx-auto flex flex-col animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-600 transition-colors duration-300 hover:text-slate-800">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPage;
