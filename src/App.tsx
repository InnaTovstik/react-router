import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
