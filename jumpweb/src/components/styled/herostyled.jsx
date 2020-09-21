import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
background-color: #5165AE;
display: flex;
flex-direction: column;
align-items: center;
#title{
    width: 35%;
    color: black;
    padding: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#subtitle{
    font-size: 2vw;
}
h1{
    font-size: 7vw;
}
.logoimg{
    width: 50%;
}
.logo{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
img{
    width: 35%;
}
`

export default Hero