// Third-party dependencies
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-styled-flexboxgrid';

// Own components/hooks/constants
import StyledWrapper from './Home.styles';

const Home = () => {
  const { t: translation } = useTranslation();

  return (
    <StyledWrapper>
      <h1>{translation('title')}</h1>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <p>One columns</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <p>Other colum</p>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <p>Last colum</p>
        </Col>
      </Row>
      { /* The children of react-router */ }
      <Outlet />
    </StyledWrapper>
  );
};

export default Home;
