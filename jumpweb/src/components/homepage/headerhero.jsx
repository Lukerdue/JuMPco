import React from 'react';
import Nav from '../nav';
import Hero from '../styled/herostyled'

export default function Headerhero (){
    return(
        <Hero className = "hero">
            <div className="logo">
                <div className="logoimg">
                    <img src={require('../../img/logo.jpg')} alt="jump company logo"/>
                </div>
                <Nav/>
            </div>
            <div id="title">
                <h1>JuMP Co.</h1>
                <div id="subtitle">
                    <h2>Junior Musical Playhouse Company</h2>
                </div>
            </div>
        </Hero>//closes header component
    )
}