import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateAccount from './pages/CreateAccount';
import Verification from './pages/Verification';
import StoreSetup from './pages/StoreSetup';

function App() {
  return (
        <main>
          <Routes>
           <Route path='/' element={<Landingpage />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/verification' element={<Verification />} />
            <Route path='/store-setup' element={<StoreSetup />} />
           </Routes>
        </main>
  );
}

export default App;