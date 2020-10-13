import React from 'react';
import Nav from './nav';
import Footerstyled from './styled/footerstyled'

export default function Footer(){
    return(
        <Footerstyled className="footer">
            <Nav/>
            <p>Jump company has been proudly running for over 30 years.</p>
        </Footerstyled>
    )
}