import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Home from './pages/Home/Home';
import QuizPage from './pages/QuizPage/QuizPage';
import SubjectPage from './pages/SubjectPage/SubjectPage';
import NotePage from './pages/NotePage/NotePage';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} /> {/* NOTE: /quiz/:studentId/:quizId */}
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/note/:noteId" element={<NotePage />} />
          <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
