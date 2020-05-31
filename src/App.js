import React from 'react';
import {Provider} from 'react-redux';
import Header from "./common/header/header";
import store from "./store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route} from "react-router"
import Home from "./pages/home/home";
import Detail from "./pages/detail/detail";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path="/home" exact render={() => <Home/>}></Route>
                        <Route path="/detail" exact render={() => <Detail/>}></Route>
                    </div>
                </BrowserRouter>
            </div>

        </Provider>
    );
}

export default App;
