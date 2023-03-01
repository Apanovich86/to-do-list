import React, {useEffect, useState} from "react";
import {AppDispatch, AppState} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {completeTodo, Todo} from "../store/todos";

const TodoList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state: AppState) => state.todos);
    const [value, setValue] = useState<Todo>({id: "", title: "", description: "", status: false});

    return (
        <div>
            <div className="todoList d-flex">
                <div>ID</div>
                <div>TITLE</div>
                <div>DESCRIPTION</div>
                <div>STATUS</div>
            </div>
            {todos.map((todo) => {
                return (
                    <div>
                        <a href="#popup" className="todoList tasks d-flex" key={todo.id} onClick={() => setValue({
                            id: todo.id,
                            title: todo.title,
                            description: todo.description,
                            status: todo.status
                        })}>
                            <div>{todo.id}.</div>
                            <div>{todo.title}</div>
                            <div>{todo.description}</div>
                            <input
                                type="checkbox"
                                checked={todo.status}
                                onChange={() => dispatch(completeTodo(todo.id))}
                            />
                        </a>
                        <div id="popup" className="popup">
                            <div className="popup-body">
                                <div className="popup-content">
                                    <div className="popup-title">{value.title}</div>
                                    <p className="m5">Description:</p>
                                    <div className="popup-text">{value.description}</div>
                                    <span>Status:</span>
                                    <input
                                        type="checkbox"
                                        checked={value.status}
                                        onChange={() => dispatch(completeTodo(todo.id))}
                                    />
                                    <div>
                                        <a href="#">
                                            <button className="button popup-close" type="submit">Close</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default TodoList;
