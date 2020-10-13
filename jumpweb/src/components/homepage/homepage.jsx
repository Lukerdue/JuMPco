import React from 'react';
import Headerhero from './headerhero';
import Cta from './cta';
import Footer from '../footer'

export default function Homepage (){
    return(
        <div className="wrapper">
            <Headerhero/>
            <Cta/>
            <Footer/>
        </div>
    )
}