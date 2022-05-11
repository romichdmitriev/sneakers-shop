import React, { FC } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// components
import { Badge, Grid, IconButton } from '@mui/material';
import ContentWrapper from 'components/partials/ContentWrapper/ContentWrapper';

// assets
import { ReactComponent as Homepage } from 'assets/icons/store.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import { ReactComponent as Cart } from 'assets/icons/shopping-bag.svg';
import { ReactComponent as Orders } from 'assets/icons/gallery.svg';
import { ReactComponent as Favourite } from 'assets/icons/heart.svg';

// service
import { RouterService } from 'service/router/Router';

// styles
import { animationBottomLine, tabBottomLine } from 'styles/mixins';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 60px;

  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

const StyledGridItem = styled(Grid)<{ active?: boolean }>`
  align-items: center;

  & .MuiIconButton-root {
    color: ${(props) => (props.active ? props.theme.palette.secondary.main : props.theme.palette.primary.dark)};
  }

  ${(props) => (props.active ? tabBottomLine : '')};

  &::after {
    height: 3px;
    background-color: ${(props) => props.theme.palette.secondary.main};

    ${animationBottomLine};
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  padding: 0;
  background-color: ${(props) => props.theme.palette.background.default};
`;

const StyledIcon = styled(IconButton)`
  width: 45px;
  height: 45px;
`;

const Footer: FC = () => {
  const location = useLocation();

  return (
    <StyledFooter>
      <StyledContentWrapper minHeight={60}>
        <Grid container sx={{ height: '100%' }}>
          <StyledGridItem
            item
            xs
            sx={{ display: 'flex' }}
            justifyContent="center"
            active={RouterService.home === location.pathname}
          >
            <Link to={RouterService.home}>
              <StyledIcon>
                <Homepage />
              </StyledIcon>
            </Link>
          </StyledGridItem>

          <StyledGridItem item xs sx={{ display: 'flex' }} justifyContent="center">
            <StyledIcon>
              <Search />
            </StyledIcon>
          </StyledGridItem>

          <StyledGridItem
            item
            xs
            sx={{ display: 'flex' }}
            justifyContent="center"
            active={RouterService.cart === location.pathname}
          >
            <Link to={RouterService.cart}>
              <StyledIcon>
                {/* TODO add count of products in cart */}
                <Badge badgeContent={4} color="secondary">
                  <Cart />
                </Badge>
              </StyledIcon>
            </Link>
          </StyledGridItem>

          <StyledGridItem
            item
            xs
            sx={{ display: 'flex' }}
            justifyContent="center"
            active={RouterService.orders === location.pathname}
          >
            <Link to={RouterService.orders}>
              <StyledIcon>
                <Orders />
              </StyledIcon>
            </Link>
          </StyledGridItem>

          <StyledGridItem
            item
            xs
            sx={{ display: 'flex' }}
            justifyContent="center"
            active={RouterService.favourite === location.pathname}
          >
            <Link to={RouterService.favourite}>
              <StyledIcon>
                <Favourite />
              </StyledIcon>
            </Link>
          </StyledGridItem>
        </Grid>
      </StyledContentWrapper>
    </StyledFooter>
  );
};

export default Footer;
