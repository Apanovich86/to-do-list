import React from 'react';
import ToDoInput from "./todo-input";
import ToDoList from "./todo-list";

const Layout = () => {
    return (
        <div className="App">
            <ToDoInput/>
            <ToDoList/>
        </div>
    );
};

export default Layout;
