import react from 'react';
import styles from 'styled-components'
import {DarkTheme} from '../components/Themes'
const Logo = styles.h1`
  display:inline-block;
  font-family:'Pacifico',cursive ;
  color: ${props => props.color === 'dark' ? props.theme.body : props.theme.text };
  position:fixed;
  left:2rem;
  top:2rem;
  z-index:3;
   `
const LogoComponent = (props) => {
    return(
        <Logo color={props.theme}>
            Mj
        </Logo>

       
    )
}

export default LogoComponent