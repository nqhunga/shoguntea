import { css } from 'styled-components';

const sizes = {
  phone: 767,
  tablet: 992,
  desktop: 1170,
  giant: 1170
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media(max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export default media;
