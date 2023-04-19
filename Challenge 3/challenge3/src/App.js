
import "./App.css";
import { useState } from "react";
import RobotList from "./RobotList";


function App() {
  let [list, setList] = useState([]);
  let [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit= ()=>{
    setList([...list, input])
    setInput("")
  }
  return (
    <div className="App">
      <input value={input} onChange={handleInput} />
      <button onClick={handleSubmit}>Enter</button>
      <RobotList list = {list}/>
    </div>
  );
}

export default App;
