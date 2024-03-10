import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './Weather';
import CityWeather from './CityWeather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/weathertest' element = {<Weather />} />
        <Route path='/view-weather/:id' element = {<CityWeather />} />
      </Routes>
    </Router>
  );
}

export default App;
