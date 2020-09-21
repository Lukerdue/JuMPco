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
.logoimg{
    width: 35%;
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