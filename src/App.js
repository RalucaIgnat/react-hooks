import "./App.css";
import { useTrees } from "./index.js";

function App() {
  const { trees } = useTrees();
  return (
    <div>
      <h1>Trees I ve heard of </h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
