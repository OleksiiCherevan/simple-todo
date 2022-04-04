import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTodo(state, action) {},
        toggleComplete(state, action) {},
        deleteTodo(state, action) {},
    },
});

export const { addTodo, toggleComplete, deleteTodo}  = todoSlice.actions

export default todoSlice.reducer    