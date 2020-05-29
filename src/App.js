import React from 'react';
import {Provider} from 'react-redux';
import style from './index.module.css';
import './test.css';
import Header from "./common/header/header";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Header/>
        </Provider>
    );
}

export default App;
