import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Books} from '../Components/Book'
import './Home.css';

export const Home = () => {

  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [needMore, setNeedMore] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    loadMoreBooks();
  }, []);

  const {category, query, sort} = useParams();

  const loadMoreBooks = () => {
    setFetching(true);
    setStartIndex(prev => prev + 30);
    const src = `https://www.googleapis.com/books/v1/volumes?q=${query || 'react'}${category === 'all' || !category ? '' : '+subject:' + category}&orderBy=${!sort ? 'newest' : sort}&startIndex=${startIndex}&maxResults=30&key=${process.env.REACT_APP_API_KEY}`;
    axios
    .get(src)
    .then(data => {
      if (data.data.items) {
        setBooks(prev => [...prev, ...data.data.items]);
        setTotalItems(data.data.totalItems);
      } else {
        setNeedMore(false);
      }
      
    })
    .finally(() => {
      setFetching(false);
    })
  }

  return (
    <> 
      {fetching ? null :
      <div className='home-total-results'>Found {totalItems} results</div>
      } 
      <Books books={books}/>
      {needMore ?
        <div className='home-load-more-container'>
          {fetching ? <div>Loading...</div> : <button className='home-load-more-button' onClick={loadMoreBooks}>Load More</button>}
        </div> 
        :
        <div className='home-total-results'>The end.</div>
      }
      
    </>
  )
}