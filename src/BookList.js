import React from 'react';
import { Link } from 'react-router-dom';
import { books } from './booksData';

const BookList = () => {
  console.log('BookList component rendered');
  return (
    <div>
      <h1>Список книг</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>"{book.name}"</strong> {book.author} (Рейтинг: {book.rating})
            <br />
            <Link to={`/book/${book.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
