import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../store/features/taskSlice";
import PropTypes from "prop-types";

const Modal = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, description, status }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="absolute w-2/3 lg:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 bg-white p-4 border rounded-md shadow-lg z-10">
          <h2 className="text-indigo-500 text-xl font-semibold">Edit task</h2>
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
          <div className="flex justify-between gap-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-3 rounded-md hover:bg-indigo-700"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className=" bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="w-full bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700"
        >
          Edit
        </button>
      )}
    </div>
  );
};

Modal.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
