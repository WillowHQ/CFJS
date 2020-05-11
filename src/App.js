import React, { useState, useEffect } from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'
import { auth } from './Firebase.js'



import './App.css';

function App() {
  const [user, setUser] = useState({ loggedIn: false})
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      user => {
        user 
        ? setUser({user})
        : setUser(null)
      },
    )
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <p> this thing on ? </p>
      {user ? <SignOut/> : <SignIn/> }
    </div>
  );
}

export default App;
