// Third-party dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';
import { selectors } from 'constants/strings.store';

// Styles
import './NotFound.scss';

const NotFound = () => {
  const languageConstants = useSelector(selectors.constants);
  const constants = languageConstants.pages.notFound;
  const fullLogo = `${process.env.PUBLIC_URL}/assets/img/full_logo.png`;

  return (
    <section className="not-found">
      <div className="imagewrapper">
        4
        <img src={fullLogo} alt="leviahack_logo" />
        4
      </div>

      <div className="message">
        <h1>{ constants.title }</h1>
        <p>{ constants.description }</p>
        <Button variant="contained" color="primary">
          { constants.button }
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
