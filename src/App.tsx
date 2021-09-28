import React from 'react';

import Header from "./components/Header";
import Aside from "./components/Aside";
import Profile from "./components/Profile";

import './App.css';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Aside/>
            <main className="main">
                <Profile/>
            </main>
        </div>
    );
}

export default App;