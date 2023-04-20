import React, {useState, createContext} from 'react'

const usersContext = createContext()
function App() {
  const [userState, setUserState] = useState({
    Bob: true,
    Gary: true,
    Jessica: true,
    Sam: true,
    Eric: true,
  });

  return (
    <div className="App">
      <usersContext.Provider value={{state:userState, setUsers:setUserState}}>

      </usersContext.Provider>
    </div>
  );
}

export default App;
