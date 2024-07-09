import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from './booksData';

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Книга не знайдена</div>;
  }

  return (
    <div>
      <h1>{book.name}</h1>
      <p>Автор: {book.author}</p>
      <p>Жанр: {book.genre}</p>
      <p>Рейтинг: {book.rating}</p>
      <p>Опис: {book.description}</p>
      <img src={book.image} alt={book.name} />
      <br />
      <Link to="/">Повернутися до списку книг</Link>
    </div>
  );
};

export default BookDetail;

