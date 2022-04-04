import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
    todos: TASKS,
    lastId: TASKS.length + 1,
};


const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        add(state, action) {
            let { text } = action.payload;
            let id = state.lastId;
            let isCompleted = false;
            state.lastId = id + 1;

            state.todos.push({
                title: text,
                id,
                isCompleted,
            });
        },
        toggleComplete(state, action) {
            let { id } = action.payload;
            let todos = state.todos

            let indexTodo = todos.findIndex((todo) => todo.id === id);
            let todo = todos[indexTodo];

            todos[indexTodo] = {
                ...todo,
                isCompleted: !todo.isCompleted,
            };
        },
        delete(state, action) {
            let {id } = action.payload
            let todos = state.todos

            state.todos = todos.filter(todo => todo.id !== id)
        },
    },
    extraReducers: {
        
    }
});

export const { add: addTodo, toggleComplete, delete: deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
