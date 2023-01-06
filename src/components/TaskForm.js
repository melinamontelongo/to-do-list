import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/TaskForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const TaskForm = (props) => {
    const [input, setInput] = useState("");

    //To target the form input
    const formInput = React.useRef(null);

    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            taskText: input,
            complete: false
        };
        props.onSubmit(newTask);
       formInput.current.value = "";
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <Form.Control
                    ref={formInput}
                    onChange={handleChange}
                    placeholder="Enter a Task"
                    aria-label="Example text with button addon"
                    aria-describedby="add-task"
                />
                <Button variant="dark" id="add-task" type="submit">
                    Add Task
                </Button>
            </InputGroup>
        </form>
    );
};

export default TaskForm;