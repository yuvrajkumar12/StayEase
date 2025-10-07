import React, { createContext } from 'react'

// Create context object
export const authDataContext = createContext()

function AuthContext({ children }) {
  const serverUrl = "http://localhost:8000"

let value={
  serverUrl
}

  return (
    <div>
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
    </div>
  )
}

// Export the provider component (named) 
export default AuthContext
