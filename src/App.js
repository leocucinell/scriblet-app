import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* 
              add a page container her to make other pages 
              100vh - height of the NavBar:
              calc(100vh - <NavBar pixel height>)
          */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
