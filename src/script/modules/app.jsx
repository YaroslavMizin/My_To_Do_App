import React, { useState, useEffect } from "react";
import { List } from "./list.jsx";
import { InputForm } from "./inputForm.jsx";
import { Count } from "./count.jsx";

export function App() {
    const [taskList, setTasklist] = useState([])
    const [count, setCount] = useState(taskList);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
        clearInterval(interval);
      };
    }, []);
    
    const countTasks = taskList.filter(item => item.flag == true).length;

    const createTask = (newTask) => {
        setTasklist([...taskList, newTask]);
    }

    const removeTask = (task) => {
        if(task.flag === true) {
            setTasklist(taskList.filter(item => item.id !== task.id));
            setCount(countTasks);
        } else return
    }

    const checkTasks = (task) => {
        let flag = taskList.find(item => item.id == task.id);
        if(flag.flag === true) {
            flag.flag = false
        } else if(flag.flag === false) {
            flag.flag = true
        }
        flag.date = new Date().toLocaleTimeString();

        setCount(countTasks);
    };
      
    return (<>
        <Count taskList = {taskList} countTasks = {countTasks} time = {time}/>
        <InputForm create={createTask}/>
        {taskList.length !== 0 ?
            <List remove={removeTask} check={checkTasks} taskList={taskList} key={taskList.id} />
            : <p>No tasks yet</p>}
    </>)
}