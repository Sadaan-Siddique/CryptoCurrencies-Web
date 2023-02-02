import React from 'react';
import './App.css';
import AxiosCoinGecko from './Components/AxiosCoinGecko'
import Nav from './Components/Nav';
import Main from './Components/Main';
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='coins' element={<AxiosCoinGecko />} />

      </Routes>
    </div>
  );
}

export default App;
