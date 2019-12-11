import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import "./UnassignedTasks.css";

const UnassignedTasks = props => {
  // console.log("TASKS", props.tasks);

  return (
    <div>
      <h1>Unassigned Tasks</h1>
      <div className="unassigned-tasks">
        {props.tasks.map(el => {
          //return <h2> {el.name} </h2>;
          return (
            <Task
              key={el._id}
              task={el}
              name={el.name}
              id={el._id}
              getData={props.getData}
            />
          );
        })}
        <TaskForm getData={props.getData} />
      </div>
    </div>
  );
};

export default UnassignedTasks;
