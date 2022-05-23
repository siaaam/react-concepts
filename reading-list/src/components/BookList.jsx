import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <>
      <div className="book-list">
        <ul>
          {books.map((book, idx) => (
            <BookDetails key={idx} book={book} />
          ))}
        </ul>
      </div>
    </>
  ) : (
    <>
      <div className="empty">books is empty</div>
    </>
  );
};

export default BookList;
