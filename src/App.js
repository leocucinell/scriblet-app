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
import QuizStartPage from './pages/QuizStartPage/QuizStartPage';
import CreateNotePage from './pages/CreateNotePage/CreateNotePage';
import EditQuizPage from './pages/EditQuizPage/EditQuizPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/quiz/:quizId/start" element={<QuizStartPage />} />
          <Route path="/quiz/:quizId/edit" element={<EditQuizPage />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/note/:noteId" element={<NotePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/note/new" element={<CreateNotePage />} />
      </Routes>
    </div>
  );
}

export default App;
