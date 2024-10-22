import React from 'react';
import './BooksWorld.css';

const BooksWorld = ({ addToCart }) => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 100,
      image: "https://m.media-amazon.com/images/I/81Q6WkLhX4L.UF1000,1000_QL80.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 150,
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 180,
      image: "https://m.media-amazon.com/images/I/71rpa1-kyvL.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 120,
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=90&crop=false",
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      price: 299,
      image: "https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@.V1.jpg",
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 199,
      image: "https://m.media-amazon.com/images/I/8125BDk3l9L.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 7,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      price: 189,
      image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@.V1.jpg",
    },
    {
      id: 8,
      title: "Brave New World",
      author: "Aldous Huxley",
      price: 150,
      image: "https://m.media-amazon.com/images/I/91D4YvdC0dL.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 9,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 100,
      image: "https://m.media-amazon.com/images/I/61mjnP-qt6L.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      price: 140,
      image: "https://rukminim2.flixcart.com/image/750/900/l13whow0/book/7/j/y/the-originals-crime-and-punishment-original-imagcr2qbrxzqwc9.jpeg?q=20&crop=false",
    },
  ];

  return (
    <div className="book-list"> {/* Changed from books-world to book-list */}
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>Rs.{book.price.toFixed(2)}</p>
          <button onClick={() => addToCart(book)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default BooksWorld;
