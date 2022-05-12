import React, { useState } from 'react';
import styled from 'styled-components';

// components
import { Skeleton } from '@mui/material';

// schema
import FCWithChildren from 'schema/helpers';
import { pallete } from 'styles/theme/theme';

interface ImageWithSkeletonProps {
  img: string;
  width?: number;
  height?: number;
  alt?: string;
}

const ImageContainer = styled.div<{ width?: number; height?: number }>`
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageSkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const ImageWithSkeleton: FCWithChildren<ImageWithSkeletonProps> = (props) => {
  const { img, alt = '', height, width } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnLoadImageSource = () => {
    setIsLoaded(true);
  };

  return (
    <ImageContainer width={width} height={height}>
      <Image src={img} alt={alt} onLoad={handleOnLoadImageSource} onError={handleOnLoadImageSource} />

      {!isLoaded && (
        <ImageSkeletonWrapper>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ backgroundColor: pallete.grey[300] }}
          />
        </ImageSkeletonWrapper>
      )}
    </ImageContainer>
  );
};

export default ImageWithSkeleton;
