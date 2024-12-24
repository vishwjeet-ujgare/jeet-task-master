import '../styles/TaskForm.css';
import { useState, useEffect } from 'react';
import TaskList from './TaskList';


function TaskForm() {


    //Declaring user state for task form information
    const [aTaskFormData, setATaskFormData] = useState({
        inputTaskTitle: "",
        inputTaskDescription: ""
    });

    //useState for storing tasks list 
    const [taskList, setTaskList] = useState([]);



    //Handling task informations state 
    function handleATaskInputChange(event) {
        const { name, value } = event.target;

        setATaskFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }


    //Handling task list use state after each task added
    function handleSaveTaskForm(event) {
        event.preventDefault();
        // console.log("Defalut prevented...");

        setTaskList((prevList) => ([
            ...prevList,
            aTaskFormData

        ]));



        // console.log(taskList);
        clearTaskFormFields();
    }



    // UseEffect hook to log task list after it is updated
    useEffect(() => {
        console.log(taskList);
    }, [taskList]);  // The dependency array ensures this runs after taskList is updated


    function clearTaskFormFields() {
        setATaskFormData({
            inputTaskTitle: "",
            inputTaskDescription: ""
        });
    }

    return (
        <>        <form className="task-form-container task-master-app-components" onSubmit={handleSaveTaskForm}>
            <input type="text" id="input-task-title" name="inputTaskTitle" placeholder="Add title" onChange={handleATaskInputChange} value={aTaskFormData.inputTaskTitle} />

            <div className="input-task-time-date-container">
                <input type="date" id="input-task-date" name="input-date" />
                <input type="time" id="input-task-time" name="input-time" />
            </div>

            <textarea id="input-task-description" name="inputTaskDescription" rows="3" placeholder="Add description" onChange={handleATaskInputChange} value={aTaskFormData.inputTaskDescription} />

            <button type="submit" id="submit-task-btn">Save</button>
        </form>

            <TaskList tasks={taskList} />
        </>

    );
}

export default TaskForm;