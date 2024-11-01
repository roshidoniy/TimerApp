import "./App.css"
import Timer from "./components/timer";
function App() {
  return (
    <div className="app-container">
      <Timer title="Regular Timer" endTime={42} elapsedTime={0} />
      {/* <Timer title="My Timer" endTime={3600} elapsedTime={0} /> */}
      <Timer title="Elapsed Timer" endTime={42} elapsedTime={4} />
    </div>
  );
}

export default App;
