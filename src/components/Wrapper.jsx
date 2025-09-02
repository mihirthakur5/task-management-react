import Form from "./Form";
import TaskList from "./TaskList";

const Wrapper = () => {
  return (
    <div className="flex rounded-md flex-col h-[calc(100vh-5rem)] bg-white container mx-auto max-w-[800px] shadow-lg gap-4 p-4">
      <Form />
      <div className="overflow-y-scroll">
        <TaskList />
      </div>
    </div>
  );
};

export default Wrapper;
