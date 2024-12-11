import './App.css'
// import Display from './components/Display';
import MediaPlayer from './components/MediaPlayer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainHomeDisplay from './components/MainHomeDisplay';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/app" element={
        <div className="flex">
          <Sidebar />
          <div>
            <Navbar />
            <MainHomeDisplay />
          </div>
          <MediaPlayer />
        </div>
      } />
      <Route path="/" element={<Navigate to="/app" />} />
    </Routes>
  )
}

export default App;
