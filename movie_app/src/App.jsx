import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sport from './pages/Sport';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Movies from './pages/Movies';
import WebSeries from './pages/WebSeries';
import TvShows from './pages/TvShows';
import { animal, fighter, jigra, sambahadur,crew,dunki,gadar2, tiger3, omg2, satyapremkikatha, bhola, rockyranikikhan, teriBaatonMein, chanduChampion, yodha, bhoolBhulaiyaa3, laapataLadies } from '/src/data/movieDta.js';

import MovieDetails from './components/MovieDetails/MovieDetails'


const App = () => {
  return (
    <Router> {/* Wrap the app in BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sports' element={<Sport />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<WebSeries />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/animal' element={<MovieDetails movie={animal} />} />
          <Route path='/dunki' element={<MovieDetails movie={dunki} />} />
          <Route path='/fighter' element={<MovieDetails movie={fighter} />} />
          <Route path='/animal' element={<MovieDetails movie={jigra} />} />
          <Route path='/animal' element={<MovieDetails movie={crew} />} />
          <Route path='/sambahadur' element={<MovieDetails movie={sambahadur} />} />
          <Route path='/gadar2' element={<MovieDetails movie={gadar2} />} />
          <Route path='/tiger3' element={<MovieDetails movie={tiger3} />} />
          <Route path='/omg2' element={<MovieDetails movie={omg2} />} />
          <Route path='/satyapremkikatha' element={<MovieDetails movie={satyapremkikatha} />} />
          <Route path='/bhola' element={<MovieDetails movie={bhola} />} />
          <Route path='/rockyranikikhani' element={<MovieDetails movie={rockyranikikhan} />} />
          <Route path='/teribaato' element={<MovieDetails movie={teriBaatonMein} />} />
          <Route path='/chanduchampion' element={<MovieDetails movie={chanduChampion} />} />
          <Route path='/merrychristmas' element={<MovieDetails movie={yodha} />} />
          <Route path='/yodha' element={<MovieDetails movie={fighter} />} />
          <Route path='/bb3' element={<MovieDetails movie={bhoolBhulaiyaa3} />} />
          <Route path='/laapataLadies' element={<MovieDetails movie={laapataLadies} />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
