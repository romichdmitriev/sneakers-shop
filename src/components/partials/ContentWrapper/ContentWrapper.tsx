import React from 'react';

// components
import { Container, ContainerProps } from '@mui/material';

// schema
import FCWithChildren from 'schema/helpers';
import styled from 'styled-components';

// styled components
const StyledContainer = styled(Container)<{ height?: number; isContentCenterOnly?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: calc(${(props) => props.theme.breakpoints.values.xl}px - 40px);
  height: ${(props) => (props.height ? `${props.height}px` : 'unset')};
  padding: ${(props) => (props.iscontentcenteronly ? '0 20px' : '128px 20px 20px')};
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.only('xs')} {
    max-width: calc(100% - 40px);
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: calc(${(props) => props.theme.breakpoints.values.md}px - 40px);
    padding: ${(props) => (props.iscontentcenteronly ? '0 20px' : '128px 20px 80px')};
  }

  ${(props) => props.theme.breakpoints.only('lg')} {
    max-width: calc(${(props) => props.theme.breakpoints.values.lg}px - 40px);
  }

  ${(props) => props.theme.breakpoints.only('xl')} {
    max-width: calc(${(props) => props.theme.breakpoints.values.xl}px - 40px);
  }
`;

/**
 * @param minHeight - Use for set height css property for container. Default is "unset".
 * @param isContentCenterOnly - Page layout centering has padding top and padding bottom in mobile version. False - turn off this behaviour, turn - turn on this behaviour.
 * */
interface ContentWrapperProps extends ContainerProps {
  minHeight?: number;
  isContentCenterOnly?: boolean;
}

const ContentWrapper: FCWithChildren<ContentWrapperProps> = (props) => {
  const { children, minHeight, className, isContentCenterOnly = true } = props;

  return (
    <StyledContainer className={className} height={minHeight} isContentCenterOnly={isContentCenterOnly}>
      {children}
    </StyledContainer>
  );
};

export default ContentWrapper;
