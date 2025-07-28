import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useStore } from "./hooks/useStore";

function App() {
  //3 usar el hook useReducer
  const { fromLanguage, setFromLanguage } = useStore();
  //console.log({ fromLanguage })
  return (
    <div className="App">
      <h1>Google Traslate</h1>
      <button onClick={() => setFromLanguage("es")}>cambiar a español</button>
      {fromLanguage}
    </div>
  );
}

export default App;
