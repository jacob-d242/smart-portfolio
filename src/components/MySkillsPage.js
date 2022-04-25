import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import styled from 'styled-components'
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width:100vw;
  height:100vh;
  position:relative;
  display:flex;
  justify-content:space-evenly;
  align-items:center;  
  `
  
const Main = styled.div`
border : 2px solid ${props => props.theme.text};
color : ${props => props.theme.text};
background-color : ${props => props.theme.body};
padding:2rem;
width:30vw;
height:60vh;
z-index:3;
line-height:1.5;

font-family:'ubuntu',monospace;
display:flex;
flex-direction: column;
justify-content:space-between;

&:hover{
  color =${props => props.theme.body};
  background-color : ${props => props.theme.text};
}
`
const Tittle = styled.h2`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(1rem + 1vw);

  ${Main}:hover &{
      &>*{
        fill:${props => props.theme.body};
      }
  }

  &>*:fist-child{
    margin-right:1rem;
  }
`
const Description = styled.div`
  color:${props => props.theme.text};
  font-size:calc(0.6em + 1vw);
  padding:0.5rem 0;

  ${Main}:hover &{
    
      color:${props => props.theme.body};
    
}

  strong{
    margin-bottom:1em;
    text-transform:uppercase;
  }
  ul,p{
    margin-left:2rem;
  }
 `

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}> 
      <Box>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton theme='light' />
        <Main>
          <Tittle>
              <Design width={40} height={40} />Designer
          </Tittle>
          <Description>
          I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>I love to design
              </strong>
              <ul>
                <li>Web Design</li>
                <li>Mobile Design</li>
              </ul>
          </Description>
          <Description>
            <strong>Tools
              </strong>
              <ul>
                <li>Figma</li>
              </ul>
          </Description>
        </Main>
        <Main>
        <Tittle>
              <Develope width={40} height={40} /> Frontend Developer
          </Tittle>
          <Description>
          I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills
              </strong>
            <p>
            Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
              </p>
          </Description>
          <Description>
            <strong>Tools
              </strong>
            <p> VScode, Github, Codepen etc.
            </p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default MySkillsPage