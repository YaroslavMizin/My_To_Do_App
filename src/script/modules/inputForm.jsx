import React, {useState} from "react";
import { Input } from "./input.jsx";
import { Button } from "./button.jsx";

export const InputForm = ({create}) => {

    const [task, setTask] = useState("");
    const addNewTask = (event) => {
        event.preventDefault();
        const newTask = {
            id: Date.now(),
            task,
            flag: false,
            date: new Date().toLocaleTimeString()
        }

        if (task !== "") {
            create(newTask);
            setTask("");
        } else return
    }

    return <form className="navigation">
        <Input
            value={task}
            type="text"
            placeholder="Create task"
            onChange={event => setTask(event.target.value)} />
        <Button onClick={addNewTask}>Set Task</Button>
    </form>
}