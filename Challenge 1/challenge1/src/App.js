import { useState } from "react";
import "./App.css";
import TasksAndSubtasks from "./component/TasksAndSubtasks";
const TASKS = [
  {
    task: "Clean bedroom",
    subtasks: [{
      sub: "Do laundry",
      completed:false
    }, {
      sub:"Organize desk",
      completed:true
    }],
  },
  {
    task: "Study",
    subtasks: [{
      sub: "Do laundry",
      completed:true
    }, {
      sub: "Wipe floors",
      completed:true
    }],
  },
  {
    task: "Build website",
    subtasks: [{
      sub: "Do laundry",
      completed:false
    }, {
      sub:"Organize desk",
      completed:true
    }],
  },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="App">
      <TasksAndSubtasks taskArray={tasks} setTaskArray={setTasks} />
    </div>
  );
}

export default App;
