import TaskList from "components/TaskList";
import TextField from "components/TextField";
import Button from "components/Button";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "store/todoSlice";

import { React, useState } from "react";



const NewTaskManager = (props) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo.todos);

    const onClick = () => {
        AddTodo();
    };

    const onTextChange = (text) => {
        setText(text);
    };

    const onDelete = (id) => {
        DeleteTask(id);
    };

    const onToggleComplete = (id) => {
        ToggleComplete(id);
    };

    const AddTodo = () => {
        dispatch(addTodo({
            text
        }))
    };

    const ToggleComplete = (id) => {
        dispatch(toggleComplete({
            id
        }))
    };

    const DeleteTask = (id) => {
        dispatch(
            deleteTodo({
                id,
            })
        );
    };
    return (
        <div className="task-manager">
            <span>
                <TextField text={text} onChange={onTextChange}></TextField>
                <Button onClick={onClick}>Add task</Button>
            </span>

            <TaskList
                tasks={todos}
                onDelete={onDelete}
                onComplete={onToggleComplete}
            ></TaskList>
        </div>
    );
};

export default NewTaskManager;
