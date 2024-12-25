import React from 'react';
import "../styles/AddTask.css"

import AddCircleIcon from '@mui/icons-material/AddCircle';
function AddTask() {
    return (
        <div className='add-task-component-container'>
            <div className='add-task-content-wrapper'>
                <AddCircleIcon />
                <p>Add Task</p>
            </div>

        </div>
    );
}

export default AddTask;
