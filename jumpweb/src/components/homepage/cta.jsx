import React from 'react';
import Ctastyled from '../styled/ctastyled';

export default function Cta (){
    return(
        <Ctastyled className="ctawrapper">
            <div className="right">
                <p>Jump company is an amazing oportunity for youth in our community
                    to join a top tier junior musical performance company in the magic valley! We produce two musicals a year
                    with opportunities for everyone. And, being hosted at the downtown Orpheum
                    theatre means getting a first-hand look into a gorgeous historic theatrical experience.
                </p>
                <button className="ctabutton">Schedule your Audition!</button>
            </div>
        </Ctastyled>
    )
}