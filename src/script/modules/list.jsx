import React from "react";
import { TaskItem } from "./task.jsx";

export const List = ({taskList, remove, check, changeTime}) => {
    return (
        <div className="list">
            {taskList.map((task, index) => 
            <TaskItem
            remove = {remove}
            task={task.task} 
            key={task.id} 
            id = {task.id}
            number={index + 1 + ". "}
            check={check}
            flag = {task.flag}
            date = {task.date}
            changeTime = {changeTime}>
            </TaskItem>)}
        </div>
    )
}