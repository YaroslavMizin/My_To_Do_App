import React, { useState } from "react";
import { Button } from "./button.jsx";

export const TaskItem = (props) => {

    return <div className="task">
        <div className="task_description">
            <span className="task_text">{props.number}{props.task}</span>
            <div>
                <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => props.check(props)} />
                <Button
                    onClick={() => props.remove(props)}
                    onChange={() => props.check(props)}>Remove</Button>
            </div>
        </div>
        <div className="time_and_comment">
            <textarea
            type="text"
            className="comment"
            placeholder="comment">
            </textarea>
            <span
            className="task_time">Changed on: {props.date}
            </span>
        </div>
    </div>
}