import React from 'react'
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
`
const Line = styled.hr`
position: relative;
border: none;
border-bottom: 1px solid #949494;
`

const Paragraph = styled.p`
display: flex;
justify-content: space-evenly;
width: 92.5vw;
font-family: 'Playfair Display', serif;
font-size: 20px;
color: #78C6D8;
font-weight: 200;
`
const Info = styled.div`
display: flex;
justify-content: space-evenly;
`

const BookName = styled.div`
margin: 1vh;
font-size: 15px;
color: #fff;
font-weight: 200;
font-family: 'Sofia Pro', sans-serif;
`

const Information = styled.div`
margin: 1vh;
font-size: 15px;
color: #fff;
font-weight: 200;
font-family: 'Sofia Pro', sans-serif;
`
const Developed = styled.p`
margin-left: 85vw;
font-size: 12px;
color: #fff;
font-weight: 200;
font-family: 'Sofia Pro', sans-serif;
`

const Footer = () => {
    return(
        <Tag>
            <Line/>
            <Paragraph>
        <p>BOOK NAMES:</p>
        <p>INFORMATION:</p>
        </Paragraph>
        <Info>
            <BookName>
            <p>Harry Potter and the Philosopher's Stone</p>
            <p>Harry Potter and the Chamber of Secrets</p>
            <p>Harry Potter and the Prisoner of Azkaban</p>
            <p>Harry Potter and the Goblet of Fire</p>
            <p>Harry Potter and the Order of the Phoenix</p>
            <p>Harry Potter and the Half-Blood Prince</p>
            <p>Harry Potter and the Deathly Hallows</p>
            </BookName>
            <Information>
                <p>Author: J. K. Rowling</p>
                <p>Genre: Adventure, Fantasy</p>
                <p>Original Language: English</p>
                <p>Published: 1998-2007 (in original),</p>
                <p>26 June 1997 - 21 July 2007</p>
                <p>Characters: Hermione Granger, Harry Potter,</p>
                <p>Ron Weasley, MORE</p>
            </Information>
        </Info>
        <GlobalStyle/>
        <Developed>Developed by Leonardo Vantine</Developed>
        </Tag>
    )
}

export default Footer