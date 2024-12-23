import React from "react"; 
import Task from "./Task";

function TaskList(){
    return (
        <div className="task-master-app-components">

            <h1>Here we will render tasks.</h1>
            <Task/>
        </div>
    );
}

export default TaskList;