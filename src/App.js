import React from 'react';
import { BrowserRouter as  Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Login from './pages/Login';
import Active from './pages/Active';
import SignUp from './pages/SignUp';
import Completed from './pages/Completed'
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div><BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/active" element={<Active />} />
          <Route path="/completed" element={<Completed />} />
        </Route>

      </Routes>
    </BrowserRouter></div>
    
  );
}

export default App;

