import React from 'react';
import Nav from './nav';
import Footerstyled from './styled/footerstyled';
import Footernav from './footernav';

export default function Footer(){
    return(
        <Footerstyled className="footer">
            <Footernav/>
            <h4>Want to sponsor us? Click Here!</h4>
            <p>Jump company has been proudly prividing entertainment to the magic valley for over 30 years</p>
        </Footerstyled>
    )
}