import React from 'react';
import { Link } from 'react-router-dom';
import { books } from './booksData';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const BookList: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Список книг
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'green', fontSize: '1.5rem' }}>
                  {book.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Автор: {book.author}
                </Typography>
                <Typography variant="body2">
                  Рейтинг: {book.rating}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/book/${book.id}`}>
                  Деталі
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
