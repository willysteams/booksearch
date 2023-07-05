import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './Form.css';

export const Form = () => {
    const {category, query, sort} = useParams();

    const [stateQuery, setQuery] = useState(query || 'react');
    const [stateCategory, setCategory] = useState(category || 'all');
    const [stateSorting, setSorting] = useState(sort || 'newest');

    const categories = [
        {
            option: 'all',
            text: 'All'
        }, 
        {
            option: 'art',
            text: 'Art'
        },
        {
            option: 'biography',
            text: 'Biography'
        },
        {
            option: 'computers',
            text: 'Computers'
        },        {
            option: 'history',
            text: 'History'
        },
        {
            option: 'medical',
            text: 'Medical'
        },
        {
            option: 'poetry',
            text: 'Poetry'
        }
    ]

    const sortItems = [
        {
            option: 'newest',
            text: 'Newest'
        },
        {
            option: 'relevance',
            text: 'Relevance'
        }
    ]

    const onSearch = (event) => {
        event.preventDefault();
        window.location.href = `/${stateCategory}/${stateQuery}/${stateSorting}`;
    }
    
    return (
        <form>
            <div className="form-group">
                <div className="form-search-container">
                    <input 
                        type="text" 
                        value={stateQuery} 
                        id="search-input" 
                        placeholder="Enter a book title"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button className="form-search-button" onClick={onSearch}>Search</button>
                </div>
                <div className="form-filters-container">
                    <label htmlFor="form-category-select">Category:</label>
                    <select 
                        className="form-category-select"
                        value={stateCategory} 
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        {categories.map(category => 
                            <option value={category.option}>{category.text}</option>
                        )}
                    </select>
                    <label htmlFor="form-sort-select">Sort by:</label>
                    <select 
                        className="form-sort-select"
                        value={stateSorting} 
                        onChange={(event) => setSorting(event.target.value)}
                    >
                        {sortItems.map(item => 
                            <option value={item.option}>{item.text}</option>
                        )}
                    </select>
                </div>
            </div>
        </form>
    )
}