import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Terminal from './terminal/Terminal';
import './shared/palette.css';
import Interface from './interface/Interface';

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [visible, setVisible] = useState(false);
  const [mini, setMini] = useState(false);

  function signupin() {
    console.log("in")
    setMini(current => !current);
    setVisible(current => !current);
  }

  function close() {
    console.log('closing')
    setVisible(current => !current);
    setMini(current => !current);
  }

  return (
    <GoogleOAuthProvider clientId='1078908177178-n95obl1t6c93so4k4hev38csp9h2thkj.apps.googleusercontent.com'>
      <div className="App dark">
        {<Terminal value={mini} signupin={signupin}/>}
        {<Interface value={visible} close={close} signupin={signupin}/>}
      </div>
    </GoogleOAuthProvider>
    
  );
}

export default App;
