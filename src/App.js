import React from 'react';
import {Header} from "./common/header";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./pages/home";
import {Detail} from "./pages/detail";
import {Login} from "./pages/login"
import {Write} from "./pages/write";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route path="/" exact component={() => <Home/>}/>
                <Route path="/login" exact component={() => <Login/>}/>
                <Route path="/detail/:id" exact component={() => <Detail/>}/>
                <Route path="/write" exact component={() => <Write/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
