import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/landing'));
const Authentication = lazy(() => import('./pages/authentication'));
const VideoMeetComponent = lazy(() => import('./pages/videoMeet'));
const HomeComponent = lazy(() => import('./pages/home'));
const History = lazy(() => import('./pages/history'));

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          {/* Suspense shows fallback UI while any lazy-loaded component is loading */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/auth' element={<Authentication />} />
              <Route path='/home' element={<HomeComponent />} />
              <Route path='/history' element={<History />} />
              <Route path='/:url' element={<VideoMeetComponent />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
