// import css
import './App.css';
// import functions
import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Plans from './pages/Plans/Plans';
import Trainers from './pages/Trainers/Trainers';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App