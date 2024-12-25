import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";
import TaskTimer from "./components/TaskTimer";
import "./App.css";

function App() {
    return (
        <div className="task-master-app">

            <div className="app-container">
                
                    <NavBar />
                
                <div className="main-container">
                    <TaskTimer/>
                    <TaskForm />
                </div>
            </div>


        </div>
    );
}

export default App;