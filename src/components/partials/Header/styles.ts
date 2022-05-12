import styled from 'styled-components';

// components
import { IconButton, Select, Typography } from '@mui/material';
import ContentWrapper from 'components/partials/ContentWrapper/ContentWrapper';

// mixins
import animatedBottomLine, { animationBottomLine, tabBottomLine } from 'styles/mixins';

/* Header */
export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  min-height: 108px;
  background-color: ${(props) => props.theme.palette.background.default};
  border: 2px solid #ebebf0;
`;

export const StyledContainer = styled(ContentWrapper)`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

/* Burger Menu */
export const MobileIconButton = styled(IconButton)`
  color: ${(props) => props.theme.palette.primary.dark};

  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

/* Navigation Menu */
export const NavMenu = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  gap: 25px;
  transform: translateY(-50%) translateX(-50%);

  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const NavMenuElement = styled(Typography)<{ active?: boolean }>`
  ${animatedBottomLine};

  color: ${(props) => props.active && props.theme.palette.secondary.main};
  pointer-events: ${(props) => (props.active ? 'none' : 'unset')}; ;
`;

/* Sub Navigation Menu */
export const SubNavMenu = styled.nav`
  display: flex;
  gap: 25px;
  height: 100%;
  padding: 0 ${(props) => props.theme.spacing(1)};
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.down('md')} {
    margin: unset;
  }
`;

export const SubNavMenuTab = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  color: ${(props) => props.active && props.theme.palette.primary.main};
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color 0.3s;

  &:focus,
  &:hover {
    color: ${(props) => !props.active && props.theme.palette.primary.main};
  }

  ${(props) => (props.active ? tabBottomLine : '')};

  &::after {
    ${(props) => (props.active ? animationBottomLine : '')};
  }

  &:focus::after,
  &:hover::after {
    ${animationBottomLine};
  }
`;

/* Select Language */
export const StyledSelect = styled(Select)`
  border-radius: 0;

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  & .MuiSelect-select {
    display: flex;
    align-items: center;
    padding-right: 25px !important;
  }

  & .MuiSelect-icon {
    top: 44%;
  }
`;
