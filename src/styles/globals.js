import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth !important;
    cursor: pointer;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
}


/* edit scrollbar */

/* width */
::-webkit-scrollbar {
  width: 15px;
 
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
 
}

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #121415; 
  border:black solid 1px 
 

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  cursor: pointer !important;
 
}

::-webkit-scrollbar-thumb:active {
    background: #fff; 
    opacity: .2;
  
    cursor: pointer !important;
} 


/* remove bottom right square */

::-webkit-scrollbar-corner {
/*
background-image: url(resources/corner.png);
background-repeat: no-repeat;
*/
background-color: #3D3D3D;
}
`;

export default GlobalStyles;
