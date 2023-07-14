import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
  overflow-x:hidden;
  font-size : ${(props) => (props.theme.fontSizeSm)};
  font-family: ${(props) => (props.theme.fontDefault)} !important;
};

body {
  background-color : #f7f7f7;
  overflow-x : hidden;
  margin :0;
 
}

////////////////////////////////////////scroll bar
/* width */
::-webkit-scrollbar {
  width: 7px;
  height:5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 15px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => (props.theme.lightGary)};
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => (props.theme.lightGary)};
}
`;