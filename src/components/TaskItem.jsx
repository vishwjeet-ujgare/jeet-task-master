import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles/TaskItem.css'


function TaskItem({ task }) {
    return (
        <div className="task-component-container">
            <div id="task-highlighter"></div>
            <div className="task-component-content-container">
                <CheckCircleOutlineIcon />
                {/* <CheckCircleIcon/> */}
                <p id="task-title-title">{task.inputTaskTitle}</p>
                <p id="task-show-more-icon-container"> <MoreVertIcon /></p>
            </div>

        </div>
    );
}

export default TaskItem;