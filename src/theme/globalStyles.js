import { injectGlobal } from 'styled-components';
import { blue } from 'theme/variables';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Gudea|Rancho');

  body {
    font-family: 'Gudea', sans-serif;
    font-size: 24px;
    color: ${blue};
  }

  h1, h2, h3 {
    font-weight: normal;
  }

  a {
    font-family: 'Rancho', cursive;
  }
`
