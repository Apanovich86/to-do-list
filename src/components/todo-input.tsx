import React, {useState} from "react";
import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";
import {addTodo} from "../store/todos";
import {Todo} from "../store/todos";

const TodoInput: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [value, setValue] = useState<Todo>({id: "", title: "", description: "", status: false});
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const title = document.getElementById("titleError");

    return (
        <form className="formValidation" onSubmit={(e) => {
            e.preventDefault();
            if (value.title.length === 0) {
                setErrorMessage(true);
                title!.style.display = "block";
            }
            dispatch(addTodo(value));
            setValue({...value, title: "", description: ""});
        }}>
            <div className="todo-input d-flex">
                <div>
                    <p>Title:</p>

                    <input
                        className="field"
                        id="todo-input"
                        value={value.title}
                        placeholder="Enter title"
                        onChange={(event) => setValue({...value, title: event.currentTarget.value})}
                    />

                    <div
                        className="titleError"
                        style={{display: errorMessage ? "block" : "none"}}
                    >This field is empty
                    </div>
                </div>
                <div>
                    <p>Description:</p>
                    <input
                        className="field"
                        id="todo-input"
                        value={value.description}
                        placeholder="Enter description"
                        onChange={(event) => setValue({...value, description: event.currentTarget.value})}
                    />
                    <div className="titleError"
                         style={{display: errorMessage ? "block" : "none"}}
                    >This field is empty</div>
                </div>
                <button className="button" type="submit">Create</button>
            </div>
        </form>
    );
};

export default TodoInput;
