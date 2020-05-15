import React, { useState, useEffect } from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'
import DataWidget from './DataWidget'
import { auth, db } from './Firebase'



import './App.css';

function App() {
  const [user, setUser] = useState()
  async function trackUser(user) {
    const userCollectionRef = db.collection('/users')
    const userRef = userCollectionRef.doc(user.uid)
    console.log("How often is this getting called")
    userRef.get().then(function(doc) {
      if(doc.exists) {
        const ticker = doc.data().ticker
        const newTicker = ticker + 1
        console.log("How often is this getting called", ticker, newTicker)
        userRef.update({ticker: newTicker})
      } else {
        console.log("New User created")
        userRef.set({ticker: 1})
      }
      setUser({user})
    })
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async user =>  {
        user 
        ? await trackUser(user)
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
