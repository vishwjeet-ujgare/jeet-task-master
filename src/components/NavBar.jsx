import "../styles/NavBar.css";
import AddTaskIcon from '@mui/icons-material/AddTask';

function NavBar() {
    return (
        <nav className="navbar-component-container">
            <AddTaskIcon/>
            <h1 className="navbar-task-master-title">JEET-Task Master</h1>
            
            <h2 className="navbar-task-master-tag-line">Conquer your to-dos with Jeet Task Master</h2>
        </nav>
    );
}
export default NavBar;
