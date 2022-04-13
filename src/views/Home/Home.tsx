// Third-party dependencies
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-styled-flexboxgrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, SubmitHandler } from 'react-hook-form';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

// Own components/hooks/constants
import StyledWrapper from './Home.styles';

library.add(fab, faCoffee, faUser);

type Inputs = {
  name: string,
  lastname: string,
};

const formExample = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  // eslint-disable-next-line
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <Row center="lg">
      <Col lg={12}>
        <h4>React Form Hoock:</h4>
      </Col>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col lg={12}>
          <input placeholder="Nombre" {...register('name', { required: true })} />
          {errors.name && <span> * This field is required</span>}
        </Col>
        <Col lg={12}>
          <input placeholder="Apellido" {...register('lastname', { required: true })} />
          {errors.lastname && <span> * This field is required</span>}
        </Col>
        <Col lg={12}>
          <input type="submit" />
        </Col>
      </form>
    </Row>
  );
};

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
          { renderIcons() }
        </Col>
        <Col xs={12} md={12} lg={4}>
          { formExample() }
        </Col>
      </Row>
      { /* The children of react-router */ }
      <Outlet />
    </StyledWrapper>
  );
};

export default Home;
