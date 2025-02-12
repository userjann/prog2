import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Foto from './pages/foto';
import Video from './pages/video';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about'element={<About/>}/>
          <Route path='/foto' element={<Foto/>}/>
          <Route path='/video' element={<Video/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
