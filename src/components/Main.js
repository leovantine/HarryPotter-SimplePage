import React from 'react'
import harryPotter from "./harryPotter.jpg"

import firstImg from "./firstImg.jpg"
import secondImg from "./secondImg.jpg"
import thirdImg from "./thirdImg.jpg"
import fourthImg from "./fourthImg.jpg"
import fifthImg from "./fifthImg.jpg"
import sixthImg from "./sixthImg.jpg"
import seventhImg from "./seventhImg.jpg"
import eighthImg from "./eighthImg.jpg"


import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;
}
`

const Tag = styled.div`
background-color: #242633;
height: 305vh;
`
const MainImg = styled.img`
width: 100%;
display: flex;
justify-content: center;
`

const NdTitulo = styled.h2`
display: flex;
justify-content: center;
font-family: 'Playfair Display', serif;
font-size: 35px;
color: #78C6D8;
font-weight: 200;
margin: 2vh;
`

const FirstP = styled.p`
display: flex;
justify-content: center;
text-align: center;
font-family: 'Sofia Pro', sans-serif;
font-size: 22px;
font-weight: 200;
margin: 4vh;
border: outset #78C6D8;
color: #fff;
`
const RdTitulo = styled.h2`
display: flex;
justify-content: center;
font-family: 'Playfair Display', serif;
font-size: 35px;
color: #78C6D8;
font-weight: 200;
margin: 2vh;
`

const FirstSession = styled.section`
display: flex;
justify-content: space-evenly;
`

const Harry = styled.img`
width: 21%;
border: outset 5px #5D63EB;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`

const Friends = styled.img`
width: 22.4%;
border: outset 5px #E3E5E6;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`

const Luna = styled.img`
width: 20%;
border: outset 5px #8E3048;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`

const Teamhp = styled.img`
width: 20%;
border: outset 5px #6C9A67;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`
const NdSession = styled.div`
display: flex;
justify-content: space-evenly;
margin: 8vh;
`

const Hpteam = styled.img`
width: 22%;
border: outset 5px #E3E5E6;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`

const Murta = styled.img`
width: 23%;
border: outset 5px #68A5F1;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`

const Voldemort = styled.img`
width: 22%;
border: outset 5px #6AC294;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`

const Teenagers = styled.img`
width: 22%;
border: outset 5px #DE7B41;
&:hover{
    transform: translateY(10px);
    cursor: pointer;
}
`
const ClickButton = styled.button`
margin: 8vh;
margin-left: 88vw;
width: 6vw;
height: 6vh;
font-family: 'Playfair Display', serif;
font-size: 18px;
border: outset 3px #68A5F1;
border-radius: 8px 8px;
border: ;
background-color: #514A92;
color: #fff;
cursor: pointer;
`
const Back = styled.a`
text-decoration: none;
color: #fff;
&:hover{
    color: #68A5F1;
    cursor: pointer;
}
`

const Main = () => {
    return(
        <Tag>
        <GlobalStyle/>
        <MainImg src={harryPotter} alt="harryPotter"/>
        <NdTitulo id="firstabout">ABOUT</NdTitulo>
        <FirstP>Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. O arco de história principal diz respeito às amizades de Harry com outros bruxos de sua idade, como Ronald Weasley e Hermione Granger, e também com o diretor de Hogwarts Albus Dumbledore, considerado o maior dos magos.</FirstP>
        <RdTitulo id="firstphotos">PHOTOS</RdTitulo>
        <FirstSession>
            <Harry src={firstImg}></Harry> 
            <Friends src={secondImg}></Friends>
            <Luna src={thirdImg}></Luna>
            <Teamhp src={fourthImg}></Teamhp>
        </FirstSession>

        <NdSession>
            <Hpteam src={fifthImg}></Hpteam>
            <Murta src={sixthImg}></Murta>
            <Voldemort src={seventhImg}></Voldemort>
            <Teenagers src={eighthImg}></Teenagers>
        </NdSession>
        <ClickButton><Back href="#top">TOP</Back></ClickButton>
        </Tag>
    )
}

export default Main