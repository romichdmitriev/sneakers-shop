import { css } from 'styled-components';

const animatedBottomLine = css`
  position: relative;

  &::after {
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 1px;
    content: ' ';
    background-color: ${(props) => props.theme.palette.secondary.main};
    transition: width 0.5s, left 0.5s;
  }

  &:focus::after,
  &:hover::after {
    left: 0;
    width: 100%;
  }
`;

export const tabBottomLine = css`
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    content: ' ';
    background-color: ${(props) => props.theme.palette.primary.main};
    transform: translateY(100%);
  }
`;

export default animatedBottomLine;

// animations
export const animationBottomLine = css`
  @keyframes animated-bottom-line {
    0% {
      left: 50%;
      width: 0;
    }

    100% {
      left: 0;
      width: 100%;
    }
  }

  animation: 0.75s animated-bottom-line;
`;
