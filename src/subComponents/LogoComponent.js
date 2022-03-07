import react from 'react';
import styles from 'styled-components'

const Logo = styles.h1`
  display:inline-block;
  color: ${props => props.theme.tetx};
  font-family:'Pacifico',cursive ;

  position:fixed;
  left:2rem;
  top:2rem;
  z-index:3;
   `
const LogoComponent = () => {
    return(
        <Logo>
            Mj
        </Logo>

       
    )
}

export default LogoComponent