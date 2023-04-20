import React, { useState, createContext } from 'react'
import DisplayUsers from './component/DisplayUsers';
import { useEffect } from 'react';

export const usersContext = createContext()
function App() {
  

  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: false,
    Sam: true,
    Eric: true,
  });

  return (
    <div className="App">
      <usersContext.Provider value={{ state: userState, setUsers: setUserState }}>
        <DisplayUsers />
      </usersContext.Provider>
    </div>
  );
}

export default App;
