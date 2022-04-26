import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      {/* By using context the 'isAutehnticated' property was removed from the parent */}
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
