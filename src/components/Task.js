import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/Task.css"
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import { TiTick } from "react-icons/ti";
import { IconContext } from "react-icons";

const Task = ( { id, taskText, complete, completeTask, deleteTask }) => {

    return (
        <div className="task-container mb-2">
            <ListGroup>
            <ListGroup.Item variant={complete ? "light" : "secondary" }>
                <div 
                className={`d-flex ${complete ? "to-do-complete" : ""}`}>
                    <div className="task-text overflow-hidden w-100" onClick={() => completeTask(id) }>
                    {taskText}
                    <IconContext.Provider value={{ size: "1.5em", className:`${complete ? "icon-display" : "icon-hidden"}`}}>
                    <TiTick />
                    </IconContext.Provider>
                    </div>
                    <div className="task-close-btn">
                <CloseButton  
                    onClick={() => deleteTask(id)} />
                    </div>
                </div>
            </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Task;