import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos";

const store = configureStore({
    reducer:{
        todos: todos.reducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>
export default store;
