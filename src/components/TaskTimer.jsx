import React from "react";
import "../styles/TaskTimer.css";

function TaskTimer() {
    return (
        <div className="task-master-app-components task-timer-component-container">
            <div className="task-timer-motivation">
                <p>Stay focused and conquer your tasks!</p>
            </div>

            <div className="task-timer-display">
                <p id="task-timer">00:00</p>
            </div>

            <div className="task-timer-control-container">
                <button className="task-timer-button task-timer-start-button">START</button>
            </div>
        </div>
    );
}

export default TaskTimer;
