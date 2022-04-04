import TaskList from "components/TaskList";
import TextField from "components/TextField";
import Button from "components/Button";

import { React, useState } from "react";

const TASKS = [
    {
        id: "1",
        title: "Help me!",
        isCompleted: true,
    },
    {
        id: "2",
        title: "Buy some milk",
        isCompleted: false,
    },
    {
        id: "3",
        title: "Make a breakfast",
        isCompleted: false,
    },
];

const NewTaskManager = (props) => {
    const [text, setText] = useState("");

    const [todos, setTodos] = useState(TASKS);
    const [id, setId] = useState(todos.length + 1);

    const onClick = () => {
        AddTask();
    };

    const onTextChange = (text) => {
        setText(text);
    };

    const onDelete = (id) => {
        DeleteTask(id);
    };

    const onToggleComplete = (id) => {
        
        ToggleComplete(id)
    };

    const AddTask = () => {
        setText('')

        if (!text) {
            return;
        }

        setId(id + 1);

        let _id = id;
        let _title = text;
        let _isCompleted = false;

        setTodos([
            ...todos,
            {
                id: _id,
                title: _title,
                isCompleted: _isCompleted,
            },
        ]);
    };

    const ToggleComplete = (id) => {
        let _todos = Array.from(todos)

        let indexTodo = _todos.findIndex(todo => todo.id === id)
        let todo = _todos[indexTodo]

        _todos[indexTodo] = {
            ...todo,
            isCompleted: true
        }

        setTodos(_todos)
    }

    const DeleteTask = (id) => {
        setTodos(todos.filter((task) => task.id !== id));
    };
    return (
        <div className="task-manager">
            <span>
                <TextField text={text} onChange={onTextChange}></TextField>
                <Button onClick={onClick}>Add task</Button>
            </span>

            <TaskList tasks={todos} onDelete={onDelete} onComplete={onToggleComplete}></TaskList>
        </div>
    );
};

export default NewTaskManager;
