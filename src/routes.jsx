
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';

const routes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  </Router>
);

export default routes;
