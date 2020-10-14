import React from 'react';
import Coronastyled from '../styled/styled homepage/corona';
import Mainstyled from '../styled/styled homepage/mainstyled';

export default function Mainwrapper(){
    return(
        <Mainstyled>
            <Coronastyled>
            <h2>We Aren't gone, just taking a long Intermission!</h2>
            <h4>We miss you</h4>
            <img src={require('../../img/sadheart.jpg')}></img>
            <p>JuMP company is currently on hold as the coronavirus pandemic grips the country.<br/>
            We have no information at this time reguarding when we will be returning to the stage.
            Parents and members, remember to keep checking back here or in your email to hear
            more info when we have it. We miss you and cannot wait to see you at out next production, 
            hopefully to return 2021.</p>
            </Coronastyled>
    </Mainstyled>
    )
}