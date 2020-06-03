import React from 'react';
import {Provider} from 'react-redux';
import Header from "./common/header/Header";
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/detail";
import Login from "./pages/login/Login"
import Write from "./pages/write/Write";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={() => <Home/>}/>
                    <Route path="/login" exact component={() => <Login/>}/>
                    <Route path="/detail/:id" exact component={() => <Detail/>}/>
                    <Route path="/write" exact component={() => <Write/>}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
