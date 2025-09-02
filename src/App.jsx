import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="bg-neutral-100">
      <Navbar />
      <div className="p-2">
        <Wrapper />
      </div>
    </div>
  );
}

export default App;
