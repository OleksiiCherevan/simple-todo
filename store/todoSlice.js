import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            
        },
        toggleComplete() {},
        deleteTodo(state, action) {},
    },
});
