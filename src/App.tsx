import React from 'react';
import {Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

type AppPropsType = {
    state: object
}

function App(props: AppPropsType) {
    debugger
    return (
        <div className="wrapper">
            <Header/>
            <Aside/>
            <main className="main">
                <Route path="/profile" component={Profile}/>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </main>
        </div>
    );
}

export default App;