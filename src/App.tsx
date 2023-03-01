import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import './App.css';
import Layout from "./components/layout";

function App() {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
}

export default App;
