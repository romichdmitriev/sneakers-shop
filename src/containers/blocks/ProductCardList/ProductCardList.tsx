import React, { FC } from 'react';
import styled from 'styled-components';

// components
import ProductCard from 'components/elements/ProductCard/ProductCard';

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 15px;
  width: 100%;
  place-items: center center;
`;

const ProductCardList: FC = () => (
  <Grid>
    {Array(10)
      .fill(null)
      .map(() => (
        <ProductCard
          cost={200}
          img="https://www.cathopic.com/images/others/grid_4e86e1d4fd0240460438e2a0b7f652c3.jpg"
        />
      ))}
  </Grid>
);

export default ProductCardList;
