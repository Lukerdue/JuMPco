import React from 'react';
import Nav from '../nav';
import Hero from '../styled/herostyled'

export default function Headerhero (){
    return(
        <Hero className = "hero">
                <Nav/>
            <div id="title">
                <h1>JuMP Co.</h1>
                <div id="subtitle">
                    <h2>Junior Musical Playhouse Company</h2>
                </div>
            </div>
        </Hero>//closes header component
    )
}