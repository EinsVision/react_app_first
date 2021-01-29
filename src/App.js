import React from 'react';
import './App.css';

const data = [
  {
    id: 1,
    title: 'Node',
    value: 0
  },
  {
    id: 2,
    title: 'React',
    value: 1
  }
];

function App() {
  return (
    <div className="App-header">
      Hello React!
      {
        data.map(ele =>(
          <>
            <p key={ele.id}>{ele.title}, {ele.value}</p>
          </>
        ))
      }
    </div>
  );
}

export default App;
