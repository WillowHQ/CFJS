import React, { useState, useEffect } from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'
import DataWidget from './DataWidget'
import { auth } from './Firebase'



import './App.css';

function App() {
  const [user, setUser] = useState()
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
      <DataWidget/>
      {user ? <SignOut/> : <SignIn/> }
    </div>
  );
}

export default App;
