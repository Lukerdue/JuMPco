import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
background: radial-gradient(circle at bottom left, #5165AE,#000926, #5165AE);
display: flex;
flex-direction: column;
align-items: center;
#title{
    width: 35%;
    color: white;
    padding: 2%;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#subtitle{
    font-size: 1vw;
}
h1{
    font-size: 4vw;
}
`

export default Hero