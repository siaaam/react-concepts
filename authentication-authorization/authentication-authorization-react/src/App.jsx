import React from 'react';

import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Private1 from './pages/Private1';
import Private2 from './pages/Private2';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/private1" element={<Private1 />} />
          <Route path="/private2" element={<Private2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
