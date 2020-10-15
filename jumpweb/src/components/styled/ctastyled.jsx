import React from 'react';
import styled from 'styled-components';

const Ctastyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
.right{
    padding: 5%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(207, 152, 147, .6);
    color: black;
    font-size: 1.35vw;
}
img{
    width: 100%;
    border-radius: 50px;
}
button{
    border: 2px solid #5165AE;
    border-radius: 5px;
    color: #5165AE;
    margin-top: 7%;
    background-color: white;
    padding: 2% 3%;
    width: 60%;
}
button:hover{
    border-color: #b86861;
    color: #b86861;
}
`
export default Ctastyled;