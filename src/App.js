import './App.css';
import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom'
import { EveriaDownloader } from './Pages/EveriaDownloader';
import { MicmicidolDownloader } from './Pages/MicmicidolDownloader';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/everia' element={<EveriaDownloader />}/>
              <Route path='/micmicidol' element={<MicmicidolDownloader />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
