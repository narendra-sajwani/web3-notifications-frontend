import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import './App.css';
import Layout from './layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Pages.Home/>} />
          <Route  path='/create-channel' element={<Pages.CreateChannel/>} />
          <Route  path='/send-notification' element={<Pages.SendNotefication/>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
