import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);

    //Gets local saved tasks and sets them to display
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("to-do-tasks"));
        if (savedTasks) {
            setTasks(savedTasks)
        }
    }, [])
    const saveTasksToLocal = arr => {
        localStorage.setItem("to-do-tasks", JSON.stringify(arr));
    }
    //Sets the passed task and saves them to local storage
    const addTask = task => {
        if (task.taskText.trim()) { //If not empty
            task.taskText = task.taskText.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
            saveTasksToLocal(updatedTasks);
        }
    };
    //Deletes the chosen task (when clicking the close button), sets and saves
    const deleteTask = id => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
        saveTasksToLocal(filteredTasks);
    };
    //Marks the chosen task as completed, sets and saves
    const completeTask = id => {
        const filteredTasks = tasks.map(task => {
            if (task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTasks(filteredTasks)
        saveTasksToLocal(filteredTasks);
    }
    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="mt-3">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            taskText={task.taskText}
                            complete={task.complete}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ToDoList;