import './style.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './UsersList';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/albums/:userId" element={<AlbumsList />} />
          <Route path="/photos/:albumId" element={<PhotosList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

  
  
