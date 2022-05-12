import React from 'react';

// components
import Header from 'components/partials/Header/Header';
import ContentWrapper from 'components/partials/ContentWrapper/ContentWrapper';
import Footer from 'components/partials/Footer/Footer';

// schema
import FCWithChildren from 'schema/helpers';

const PageLayout: FCWithChildren<unknown> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <ContentWrapper isContentCenterOnly={false}>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

export default PageLayout;
