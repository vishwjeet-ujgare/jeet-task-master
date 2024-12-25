import React from "react";
import TaskItem from "./TaskItem";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../styles/TaskList.css"
import AddTask from "./AddTask";
function TaskList({ tasks }) {

    return (
        <div className="task-master-app-components task-list-container">

            <div className="task-list-heading-container">
                <h3 className="task-list-title">Tasks</h3>
                <p className="more-icon-wrapper task-list-more-option-icon-wrapper"> <MoreVertIcon /></p>
            </div>

            <div className="task-list-items-wrapper">
                {
                    tasks.map((task, index) => (
                        <TaskItem key={index} id={index} task={task} />
                    ))
                }
            </div>

            <AddTask/>


        </div>
    );
}

export default TaskList;