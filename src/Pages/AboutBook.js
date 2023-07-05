import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './AboutBook.css';

export const About = () => {
  const params = useParams();

  const [book, setBooks] = useState(null);

  useEffect(() => {
    const src = `https://www.googleapis.com/books/v1/volumes/${params.bookId}?key=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(src)
      .then(data => {
        setBooks(data.data);
      })
    }, [params]);

  return (
    <>
      {book && 
      <div className='about-group'>
        {book.volumeInfo.imageLinks?.thumbnail ?
          <img className="about-image" src={book.volumeInfo.imageLinks.thumbnail} alt="Didn't load."/>
          : 
          <div className="about-image-error">Image didn't load</div>
        }
        <div className='about-info'>
            <div className="book-info-category">
              {book.volumeInfo.categories && book.volumeInfo.categories[0]}
            </div>
            <div className='about-info-title'>{book.volumeInfo.title}</div>
            <div className="about-info-author">
                    {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
            </div>
          <div className='about-info-description' dangerouslySetInnerHTML={{ __html: book.volumeInfo.description}}></div>
        </div>
      </div> 
      }
    </>
  )
}