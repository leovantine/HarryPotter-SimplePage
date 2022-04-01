import React from 'react'
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"

import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const List = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 14vh;
list-style: none;
font-family: 'Sofia Pro', sans-serif;
font-size: 18px;
background-color: #242633;
color: #fff;
weigth: bolder;
`

const NdList = styled.li`
&:hover{
  cursor: pointer;
  color: #78C6D8;
}
`
const Link = styled.a`
text-decoration: none;
color: #fff;
&:hover{
  color: #78C6D8;
}
`

const Titulo = styled.h1`
display: flex;
justify-content: center;
background-color: #242633;
color: #78C6D8;
font-family: 'Playfair Display', serif;
font-size: 35px;
font-weight: 200;
`
const Linking = styled.a`
text-decoration: none;
color: #fff;
&:hover{
  color: #78C6D8;
}
`
const NdLinking = styled.a`
text-decoration: none;
color: #fff;
&:hover{
  color: #78C6D8;
}
`
const RdLinking = styled.a`
text-decoration: none;
color: #fff;
&:hover{
  color: #78C6D8;
`

const Header = () => {
  return(
    <>
      <GlobalStyle/>
      <List id="top">
        <NdList><Linking href="#firsthome">HOME</Linking></NdList>
        <NdList><NdLinking href="#firstabout">ABOUT</NdLinking></NdList>
        <NdList><RdLinking href="#firstphotos">PHOTOS</RdLinking></NdList>
        <NdList><Link href="https://www.wizardingworld.com/" target="_blank">WIZARDINGWORLD</Link></NdList>
      </List>
      <Titulo id="firsthome">HARRY POTTER WORLD</Titulo>
      <Main/>
      <Footer/>
    </>
  )
}

export default Header