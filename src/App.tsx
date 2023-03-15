import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorPage from './pages/404/404';
import About from './pages/About/About';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/404' element={ <ErrorPage /> } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
