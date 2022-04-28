import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
   /*  Using Forwarding Refs instead Context Provider
      <AuthContext.Provider value={
        { isLoggedIn: isLoggedIn,
          // We are just POINTING to the logoutHandler function, Not executing it
          onLogout: logoutHandler
        }
        }> */

      <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>

      // </AuthContext.Provider>
  );
}

export default App;
