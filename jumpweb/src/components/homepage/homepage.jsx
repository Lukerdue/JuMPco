import React from 'react';
import Headerhero from './headerhero';
import Cta from './cta';
import Footer from '../footer';
import Mainwrapper from './maincontent'

export default function Homepage (){
    return(
        <div className="wrapper">
            <Headerhero/>
            <Cta/>
            <Mainwrapper/>
            <Footer/>
        </div>
    )
}