import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Todo {
    id: any;
    title: string;
    description: string;
    status: boolean;
}

function* idMaker() {
    let index = 1;
    while (true)
    yield index++;
}

let it = idMaker();

const todos = createSlice({
    name: "todos",
    initialState: [] as Todo [],
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push({
                id: it.next().value,
                title: action.payload.title,
                description: action.payload.description,
                status: false
            });
        },
        completeTodo: (state, action: PayloadAction<string>) => {
            const completeTodo = state.find(todo => todo.id === action.payload);
            if (completeTodo)
            completeTodo.status = true;
            return state;
        },
        getTodo: (state, action: PayloadAction<string>) => {
            const existingTodo = state.filter(todo => todo.id === action.payload);
            console.log(existingTodo);
            return existingTodo;
        }

    }
})

export const {addTodo, completeTodo, getTodo} = todos.actions;

export default todos;
