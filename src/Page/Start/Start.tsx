import React from 'react';
import './Start.css';
import title from "./title.png";
function Start() {
    return (<>
        <div className="App">
            <header className="App-header">
                <img src={title} alt="title" />
                <a
                    className="App-link"
                    href="/Login"
                >
                    Start Project 1
                </a>
            </header>
        </div>
        </>
    )
}
export default Start;
