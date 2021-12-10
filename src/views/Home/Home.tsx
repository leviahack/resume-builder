// Third-party dependencies
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-styled-flexboxgrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

// Own components/hooks/constants
import StyledWrapper from './Home.styles';

library.add(fab, faCoffee, faUser);

const Home = () => {
  const { t: translation } = useTranslation();

  const renderIcons = () => (
    <div className="Icons">
      <p>Simple Icon: </p>
      <FontAwesomeIcon icon={faCoffee} />
      <br />

      <p>Simple Icon by string: </p>
      <FontAwesomeIcon icon="user" />
      <br />

      <p>Simple Icon by library use : </p>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      {' '}
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      {' '}
      <FontAwesomeIcon icon={['fab', 'google']} />
      <br />

      <p>Sizes Icon: </p>
      <p>xs</p>
      <FontAwesomeIcon icon={['fab', 'apple']} size="xs" />
      <p>lg</p>
      <FontAwesomeIcon icon={['fab', 'apple']} size="lg" />
      <p>6x</p>
      <FontAwesomeIcon icon={['fab', 'apple']} size="6x" />
    </div>
  );

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
      {renderIcons()}
      { /* The children of react-router */ }
      <Outlet />
    </StyledWrapper>
  );
};

export default Home;
