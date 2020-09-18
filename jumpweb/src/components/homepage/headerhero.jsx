import React from 'react';
import Nav from '../nav'

export default function Headerhero (){
    return(
        <div className = "hero">
            <div className="logo">
                <Nav/>
                <img alt="jump company logo"/>
            </div>
            <div id="title">
                <h1>JuMP Co.</h1>
                <div id="subtitle">
                    <h2>Junior Musical Playhouse Company</h2>
                </div>
            </div>
        </div>//closes header component
    )
}