import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
    return (
        <div className="task-master-app-components">

            <h1>Here we will render tasks.</h1>

            {
                tasks.map((task,index) =>(
                    <TaskItem key={index} task={task} />
                ))
            }

        </div>
    );
}

export default TaskList;