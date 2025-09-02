import { useSelector, useDispatch } from "react-redux";
import { fetchTodo, removeTask } from "../store/features/taskSlice";
import { useEffect } from "react";
import Modal from "./Modal";

const TaskList = () => {
  const { tasks, loading, error } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-gray-50 p-4 rounded-md shadow-sm flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              <div>
                <p className="font-semibold text-lg">{task.title}</p>
                {task.description && <p>{task.description}</p>}
                <p className="font-semibold">
                  Status:{" "}
                  <span
                    className={`underline italic ${
                      task.status === "Completed"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {task.status}
                  </span>
                </p>
              </div>
              <div className="space-x-2 flex">
                <Modal task={task} />
                <button
                  onClick={() => handleRemove(task.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
