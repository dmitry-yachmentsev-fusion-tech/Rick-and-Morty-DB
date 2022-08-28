import { wrapper } from '../redux/store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-color: rgb(24, 11, 37);
  padding: 0;
  margin: 0 200px;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto Slab', sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
  margin: 0;
  color: orange;
}

a {
 text-decoration: none;
}

p {
  font-size: 14px;
  color: #fff;
  margin: 0;
}

button {
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
`;

function MyApp ({ Component, pageProps, }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  )
};

export default wrapper.withRedux(MyApp);