import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import HomePage from 'pages/home';

export const RouterService = {
  home: '/',
  cart: '/cart',
  product: (id: string) => `/product/${id}`,
  favourite: '/favourite',
  orders: '/orders',
};

enum RoutePaths {
  home = '/',
  cart = 'cart',
  product = 'product:id',
  favourite = 'favourite',
  orders = 'orders',
}

const AppRouter = () => (
  <Routes>
    <Route path={RoutePaths.home} element={<HomePage />} />
    <Route path={RoutePaths.cart} element={<HomePage />} />
    <Route path={RoutePaths.favourite} element={<HomePage />} />
    <Route path={RoutePaths.product} element={<HomePage />} />
    {/* TODO add Error 404 Page */}
    <Route path="*" element={<HomePage />} />
  </Routes>
);

export default AppRouter;
