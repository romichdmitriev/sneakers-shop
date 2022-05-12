import React from 'react';
import styled from 'styled-components';

// components
import { Box, Typography } from '@mui/material';
import ImageWithSkeleton from 'components/elements/ImageWithSkeleton/ImageWithSkeleton';

// schema
import FCWithChildren from 'schema/helpers';

interface ProductCardProps {
  img: string;
  cost: number;
  maxWidth?: number;
}

const Wrapper = styled(Box)<{ maxWidth?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : 'unset')};
  height: 100%;
  overflow: hidden;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.palette.background.default};
  }
`;

const Cost = styled(Typography)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const ProductCard: FCWithChildren<ProductCardProps> = (props) => {
  const { img, cost, maxWidth } = props;

  return (
    <Wrapper maxWidth={maxWidth}>
      <ImageWithSkeleton width={maxWidth} height={maxWidth} img={img} />

      <Cost variant="subtitle1">${cost}</Cost>
    </Wrapper>
  );
};

export default ProductCard;
