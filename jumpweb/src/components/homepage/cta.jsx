import React from 'react'

export default function Cta (){
    return(
        <div className="ctawrapper">
            <div className="left">
                <img alt="kids on stage" src={require("../../img/ganddhotbox.jpg")}/>
            </div>
            <div className="right">
                <button className="ctabutton">Schedule your Audition!</button>
            </div>
        </div>
    )
}