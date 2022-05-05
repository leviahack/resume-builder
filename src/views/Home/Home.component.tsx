// Third-party dependencies
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Grid } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

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
    <Grid container>
      <Grid item lg={12}>
        <h4>React Form Hoock:</h4>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item lg={12}>
          <input placeholder="Nombre" {...register('name', { required: true })} />
          {errors.name && <span> * This field is required</span>}
        </Grid>
        <Grid item lg={12}>
          <input placeholder="Apellido" {...register('lastname', { required: true })} />
          {errors.lastname && <span> * This field is required</span>}
        </Grid>
        <Grid item lg={12}>
          <input type="submit" />
        </Grid>
      </form>
    </Grid>
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
      <Button variant="contained">Hello Material Ui</Button>
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
      <Grid container>
        <Grid item xs={6}>
          <p>One columns</p>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          { renderIcons() }
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          { formExample() }
        </Grid>
      </Grid>
      { /* The children of react-router */ }
      <Outlet />
    </StyledWrapper>
  );
};

export default Home;
