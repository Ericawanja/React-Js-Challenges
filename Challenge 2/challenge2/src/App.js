

import { useState } from 'react';
import values from './data';
import DisplayNestedObj from './DisplayNestedObj';

function App() {
  let [data, setData] = useState(values)
  return (
    <div className="App">
      <DisplayNestedObj data={data}/>
    </div>
  );
}

export default App;
