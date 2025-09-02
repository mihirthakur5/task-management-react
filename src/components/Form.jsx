import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../store/features/taskSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-indigo-500 text-xl font-semibold">Add new task</h2>
      <div>
        <input
          type="text"
          placeholder="Task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="px-3 border py-2 w-full rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>
      <div>
        <textarea
          placeholder="Task description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 border py-2 w-full rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        ></textarea>
      </div>
      <div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Add task
      </button>
    </form>
  );
};

export default Form;
