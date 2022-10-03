import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  font-size: 62.5%
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: ${({ theme }) => theme.colors.background_900};
  color: ${({ theme }) => theme.colors.white};

  -webkit-font-smoothing: antialiased;
}

::selection {
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.black}

}

::-webkit-scrollbar {
  width: 0.6rem;
     
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.pink};
}

body, input, button, textarea {
  font-size: 1.6rem;
  font-family: 'Roboto Slab', serif;
  outline: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray_100};
}

button, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.9);
}
`
