
import React, { useEffect, useState } from 'react'
import generateActivity from './utils/generateActivity';
import DisplayActivityList from './components/DisplayACtivityList';

function App() {
  let [isLoading, setIsLoading] = useState(false)
  let [activities, setActivities] = useState([])
  const getActivity = async () => {
    setIsLoading(true)
    const data = await generateActivity()
    
    setActivities([...activities, data])
    setIsLoading(false)

  }
  return (
    <div className="App">
      <button onClick={getActivity} disabled={isLoading}>{isLoading ? "Getting the data" : "Generate the activity"}</button>
      <DisplayActivityList list={activities} />
    </div>
  );
}

export default App;
