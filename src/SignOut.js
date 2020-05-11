import React from 'react'
import { auth, googleAuthProvider } from './Firebase'

function SignOut() {
  
  return (
    <div className="SignIn">
      <button onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  )

}

export default SignOut
