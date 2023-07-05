import React from "react";
import { Link } from "react-router-dom";
import './Book.css';


export const Books = ({ books }) => {


  return (
    <ul className="books-group">
      {books.map((book) => (
        <Link key={book.id} to={`/about/${book.id}`}>
          <li className="books-group-item" key={book.id}>
            {book.volumeInfo.imageLinks?.thumbnail ?
              <img className="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt="Didn't load."/>
              : 
              <div className="book-img-error">Image didn't load</div>
            }
            <div className="book-info">
              <div className="book-info-category">
                {book.volumeInfo.categories && book.volumeInfo.categories[0]}
              </div>
              <div className="book-info-title" title={book.volumeInfo.title}>{book.volumeInfo.title}</div>
              <div className="book-info-author">
                {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};