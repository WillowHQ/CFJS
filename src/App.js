import React, { useState, useEffect } from 'react';
import SignIn from './SignIn'
import SignOut from './SignOut'
import DataWidget from './DataWidget'
import { auth, db } from './Firebase'



import './App.css';

function App() {
  const [user, setUser] = useState()
  async function trackUser(user) {
    const userRef = db.collection('/users').doc(user.uid)
    db.runTransaction(function(transaction) {
      return transaction.get(userRef).then(async function(userDoc) {
          if (!userDoc.exists) {
            const response = await db.collection('/users').doc(user.uid).set({
              ticker: 1,
            })
            console.log("New user created", response)
            return
          }
          //check if ticker exists
          //user.hasField
  
          var newTicker = userDoc.data().ticker + 1;
          if (newTicker <= 1000000) {
              transaction.update(userRef, { ticker: newTicker });
              return newTicker;
          } else {
              return Promise.reject("Sorry! Ticker is too big.");
          }
      });
  }).then(function(newTicker) {
      console.log("Ticker increased to ", newTicker);
  }).catch(function(err) {
      // This will be an "population is too big" error.
      console.error(err);
  });

    // const response  =  await db.collection('/users').doc(user.uid).update({ 

  
    //   first: "Thom",
    //   last: "Lovelace",
    //   uid: user.uid
    // })
    
    
    setUser({user})
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
