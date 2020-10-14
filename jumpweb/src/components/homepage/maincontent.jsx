import React from 'react';
import Coronastyled from '../styled/styled homepage/corona';
import Mainstyled from '../styled/styled homepage/mainstyled';
import Involvestyled from '../styled/styled homepage/involve';

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
            more info when we have it. We miss you and cannot wait to see you at our next production. 
            Expected to return for our 2021 winter show.</p>
            </Coronastyled>
            <Involvestyled>
                <h2>Getting Involved</h2>
                <p>Getting involved in a community group such as JuMP company is a great opportunity for children and parents alike. JuMP Company members must be in 2nd through 12th grades. Auditions are held in early January for the Winter Show and late Spring for the Summer show.  JuMP Company holds several workshops throughout the year which are open to all school-age participants. Each show has a production fee which must be paid before cast members begin rehearsals.  Typically this runs between $100-125. Need based scholarships for production fees are available with board approval, prior to auditions. Contact us for more information.
                <br/>Information about upcoming, shows, workshops and auditions will be posted here as it becomes available.<br/><br/> JuMP Co is run by a board of volunteers and parent involvement is crucial to run a production. From helping with props and costumes to chaperoning rehearsals and performances, and even joining the JuMP company Senior Board, there's plenty to do for parents to get involved too. Get in touch with a current JuMP company board member to get more information.</p>
            </Involvestyled>
    </Mainstyled>
    )
}