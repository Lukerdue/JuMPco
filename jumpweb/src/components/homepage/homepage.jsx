import React from 'react';
import Headerhero from './headerhero';
import Cta from './cta';

export default function Homepage (){
    return(
        <div className="wrapper">
            <Headerhero/>
            <Cta/>
        </div>
    )
}