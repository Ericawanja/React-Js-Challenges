import React from "react";

function TasksAndSubtasks({ taskArray, setTaskArray }) {
  let checkToStrike = (data) => {
    for (let i = 0; i < data.subtasks.length; i++) {
      if (!data.subtasks[i].completed) return "";
    }

    return "strike";
  };
  let handleCompletedTasks = ()=>{
    let remTasks = taskArray.filter(task=>{
        for(let i =0; i<task.sub.length; i++){
            if(!task.sub[i].completed){
                continue
            }else{
                return 
            }
        }
    })
  }
  return (
    <div>
      {taskArray.length > 0 ? (
        <div>
          {taskArray.map((task) => {
            return (
              <div>
                <h2 className={checkToStrike(task)}>{task.task}</h2>
                {task.subtasks.length > 0 && (
                  <div className="subtasks">
                    {task.subtasks.map((subtask) => {
                      return (
                        <div className={subtask.completed ? "strike" : ""}>
                          {subtask.sub}
                        </div>
                      );
                    })}
                  </div>
                )}
                <button onClick={handleCompletedTasks}>
                  Clear completed tasks
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No tasks available</h1>
      )}
    </div>
  );
}

export default TasksAndSubtasks;
