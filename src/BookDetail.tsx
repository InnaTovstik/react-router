import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books, Book } from './booksData';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book: Book | undefined = books.find((book) => book.id === parseInt(id!, 10));

  if (!book) {
    return <Typography>Книга не знайдена</Typography>;
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={book.image}
          alt={book.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'green', fontSize: '2rem' }}>
            {book.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Автор: {book.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Жанр: {book.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Рейтинг: {book.rating}
          </Typography>
          <Typography variant="body1" paragraph>
            Опис: {book.description}
          </Typography>
        </CardContent>
        <Button size="small" component={Link} to="/">
          Повернутися до списку книг
        </Button>
      </Card>
    </Container>
  );
};

export default BookDetail;