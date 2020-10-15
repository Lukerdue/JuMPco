import React from 'react';
import Ctastyled from '../styled/ctastyled';

export default function Cta (){
    return(
        <Ctastyled className="ctawrapper">
            <div className="right">
                <p>Jump company is an amazing oportunity for youth in our community
                    to join the best junior performance company in the magic valley! Auditions are open for everyone grades 2-12.
                </p>
                <button className="ctabutton">Schedule your Audition!</button>
            </div>
        </Ctastyled>
    )
}