import React from 'react';

// components
import ProductCardList from 'containers/blocks/ProductCardList/ProductCardList';
import PageLayout from 'containers/layouts/PageLayout/PageLayout';

const HomePage = () => (
  <PageLayout>
    <ProductCardList />
  </PageLayout>
);

export default HomePage;
