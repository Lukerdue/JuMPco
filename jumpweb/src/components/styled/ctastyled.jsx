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
    background-color: rgb(9, 16, 41, .7);
    color: white;
    font-size: 1.35vw;
}
img{
    width: 100%;
    border-radius: 50px;
}
button{
    border: none;
    border-radius: 5px;
    color: white;
    margin-top: 7%;
    background: linear-gradient(to left, #091029, #5165AE);
    padding: 2% 3%;
    width: 60%;
}
button:hover{
    background: #5165AE;
}
`
export default Ctastyled;