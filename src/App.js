import React from 'react';
import {Provider} from 'react-redux';
import Header from "./common/header/Header";
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/detail";
import Login from "./pages/login/Login"

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={() => <Home/>}></Route>
                    <Route path="/login" exact component={() => <Login/>}></Route>
                    <Route path="/detail/:id" exact component={() => <Detail/>}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
