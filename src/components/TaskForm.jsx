import '../styles/TaskForm.css'
function TaskForm() {
    return (
        <form className="task-form-container task-master-app-components">
            <input type="text" id="input-task-title" name="title"  placeholder="Add title" />
            <div className="input-task-time-date-container"> 
                <input type="date"  id="input-task-date" name="date"/>
                <input type="time" id="input-task-time" name="time" />
            </div>
            <textarea id="input-task-description" name="description" rows="3" placeholder="Add description"/>
            
            <button type="sumbmit" id="submit-task-btn">Save</button>
       </form>
    );
}

export default TaskForm;