import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../styles/TaskItem.css'



function TaskItem({ task, id }) {
    const [isExpanded, setIsExpanded] = useState(false);


    function handleExapandingDetails() {
        console.log("You have clicked on task : ", id + 1);
        setIsExpanded((prevState) => (!prevState));

    }


    return (


        <div className="task-component-container" >
            <div id="task-highlighter"></div>

            <div className="task-item-content-wrapper" >

                <div className="task-component-content" >
                    <CheckCircleOutlineIcon className="task-status-icon" />

                    {/* <CheckCircleIcon/> */}
                    <p id="task-title-title" onClick={handleExapandingDetails}>{task.inputTaskTitle}</p>
                    <p className="task-show-more-icon-container more-icon-wrapper"> <MoreVertIcon /></p>
                </div>

                {
                    isExpanded && (
                        <div className="task-description-wrapper">
                            <p id="task-description" >{task.inputTaskDescription} </p>
                        </div>)

                }

            </div>
        </div>


    );
}

export default TaskItem;