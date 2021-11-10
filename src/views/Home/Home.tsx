// Third-party dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Own components/hooks/constants
import StyledWrapper from './Home.styles';

const Home: React.FC = () => {
  const { t: translation } = useTranslation();

  return (
    <StyledWrapper>
      <h1>{translation('title')}</h1>

      { /* The children of react-router */ }
      <Outlet />
    </StyledWrapper>
  );
};

export default Home;
