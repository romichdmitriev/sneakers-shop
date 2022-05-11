import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// styled components
import * as Styles from 'components/partials/Header/styles';
import { Badge, Divider, Grid, IconButton, MenuItem, Typography } from '@mui/material';

// assets
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Cart } from 'assets/icons/shopping-bag.svg';
import { ReactComponent as BurgerMenu } from 'assets/icons/burger.svg';
import { ReactComponent as Filters } from 'assets/icons/filters.svg';
import { ReactComponent as Ru } from 'assets/icons/russian.svg';
import { ReactComponent as En } from 'assets/icons/english.svg';
import { ReactComponent as ExpandArrow } from 'assets/icons/arrow.svg';

// utils
import CONSTANTS from 'utils/constants';

// service
import { RouterService } from 'service/router/Router';
import CLOTHES_TYPES from 'utils/datasets';

const Header: FC = () => {
  // check active navigation menu item
  const location = useLocation();

  // check active navigation menu tab
  const [activeTab, setActiveTab] = useState(CLOTHES_TYPES[0].value);

  const handleOnChangeTab = (tab: string) => () => {
    setActiveTab(tab);
  };

  return (
    <Styles.StyledHeader>
      <Styles.StyledContainer minHeight={64}>
        <Styles.MobileIconButton>
          <BurgerMenu />
        </Styles.MobileIconButton>

        <Link to={RouterService.home}>
          <IconButton disableFocusRipple disableRipple>
            <Logo />
          </IconButton>
        </Link>

        <Styles.NavMenu>
          <Link to={RouterService.home}>
            <Styles.NavMenuElement active={RouterService.home === location.pathname} variant="body2">
              {CONSTANTS.home}
            </Styles.NavMenuElement>
          </Link>

          <Styles.NavMenuElement variant="body2" sx={{ cursor: 'pointer' }}>
            {CONSTANTS.search}
          </Styles.NavMenuElement>

          <Link to={RouterService.favourite}>
            <Styles.NavMenuElement active={RouterService.favourite === location.pathname} variant="body2">
              {CONSTANTS.favourite}
            </Styles.NavMenuElement>
          </Link>

          <Link to={RouterService.orders}>
            <Styles.NavMenuElement active={RouterService.orders === location.pathname} variant="body2">
              {CONSTANTS.orders}
            </Styles.NavMenuElement>
          </Link>
        </Styles.NavMenu>

        <Grid
          container
          spacing={3}
          justifyContent="flex-end"
          alignItems="center"
          sx={{ width: 'max-content', display: { xs: 'none', md: 'flex' } }}
        >
          <Grid item>
            <Styles.StyledSelect
              IconComponent={ExpandArrow}
              size="small"
              displayEmpty
              defaultValue="ru"
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="ru">
                <Ru width={20} height={13} />
              </MenuItem>
              <MenuItem value="en">
                <En width={20} height={13} />
              </MenuItem>
            </Styles.StyledSelect>
          </Grid>

          <Grid item>
            <Divider orientation="vertical" flexItem sx={{ height: '32px', width: '2px' }} />
          </Grid>

          <Grid item>
            <Link to={RouterService.cart}>
              <IconButton sx={{ width: 36 }}>
                {/* TODO add count of products in cart */}
                <Badge badgeContent={4} color="secondary">
                  <Cart />
                </Badge>
              </IconButton>
            </Link>
          </Grid>
        </Grid>

        <Styles.MobileIconButton>
          <Filters />
        </Styles.MobileIconButton>
      </Styles.StyledContainer>

      <Styles.StyledContainer minHeight={44}>
        <Styles.SubNavMenu>
          {CLOTHES_TYPES.map((item) => (
            <Styles.SubNavMenuTab
              key={`subnav-tab-${item.value}`}
              active={activeTab === item.value}
              onClick={handleOnChangeTab(item.value)}
            >
              <Typography variant="body1" paragraph>
                {item.label}
              </Typography>
            </Styles.SubNavMenuTab>
          ))}
        </Styles.SubNavMenu>
      </Styles.StyledContainer>
    </Styles.StyledHeader>
  );
};

export default Header;
