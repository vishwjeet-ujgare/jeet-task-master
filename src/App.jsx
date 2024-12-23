import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";

import "./App.css";
import TaskList from "./components/TaskList";

function App() {
    return (
        <div className="task-master-app">

            <div className="app-container">
                <div className="navbar">
                    <NavBar />
                </div>
                <div className="main-container">
                    <TaskForm />
                    <TaskList/>


                </div>
            </div>


        </div>
    );
}

export default App;