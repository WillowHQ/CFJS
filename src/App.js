import React, { useState, useEffect } from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'
import StoryTeller from './StoryTeller'
import { auth, db } from './Firebase'



import './App.css';

function App() {
  const [user, setUser] = useState()
  const [tickerThing, setTickerThing] = useState(0)
  
  useEffect(() => {
    async function trackUser(user) {
      const userCollectionRef = db.collection('/users')
      const userRef = userCollectionRef.doc(user.uid)
      userRef.get().then(function(doc) {
        if(doc.exists) {
          const ticker = doc.data().ticker
          const newTicker = ticker + 1
          setTickerThing(newTicker)
          userRef.update({ticker: newTicker})
        } else {
          console.log("New User created")
          userRef.set({ticker: 1})
        }
        setUser({user})
      })
    }
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
      <StoryTeller ticker={tickerThing} />
      {user ? <SignOut/> : <SignIn/> }
    </div>
  );
}

export default App;
