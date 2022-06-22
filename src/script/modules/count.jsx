import React from "react";


export const Count = (props) => {
    return <p>{props.time.toLocaleTimeString()} Completed: {props.countTasks} of {props.taskList.length}</p>
}