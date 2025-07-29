import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //essa função é chamada uma unica vez quando o componente é montado
  //uma vez que estamos passando uma lista vazia como segundo argumento
  useEffect(() => {
    async function fetchTasks() {
      //simula uma chamda de API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );
      const data = await response.json();
      //console.log(data);
      setTask(data);
    }
    //comentando a chamada da API
    //fetchTasks();
  }, []);

  function OnTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTask(newTasks);
  }

  function OnDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTask([...tasks, newTask]);
  }

  return (
    <>
      <div className="min-h-screen bg-slate-600 flex justify-center items-start px-4 py-8">
        <div className="w-full max-w-4xl flex flex-col items-center space-y-6">
          {/* Título */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Gerenciador de Tarefas
          </h1>

          {/* Componente de adicionar tarefas */}
          <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

          {/* Lista de tarefas */}
          <Tasks
            tasks={tasks}
            OnTaskClick={OnTaskClick}
            OnDeleteTaskClick={OnDeleteTaskClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
