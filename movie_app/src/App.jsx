import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sport from './pages/Sport';
import Navbar from './components/Navbar/Navbar';
import Movies from './pages/Movies';

const App = () => {
  return (
    <Router> {/* Wrap the app in BrowserRouter */}
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sports' element={<Sport />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
