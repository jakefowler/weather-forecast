import React from 'react';
import ForecastDay from './components/ForecastDay';
import './App.css';

function App() {
  return (
    <div className="App">
      {[1, 2, 3, 4, 5].map((day, i) => {
        console.log(day);
        return <ForecastDay dayNum={day} key={i} />
      })}
    </div>
  );
}

export default App;
