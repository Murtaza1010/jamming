import React from 'react'
import './SearchBar.css'
export default function SearchBar({ onSearch, searchTerm, setSearchTerm }) {

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); onSearch(e.target.value)}} />
            <button className="SearchButton" onClick={() => onSearch(searchTerm)}>SEARCH</button>
        </div>
    )
}
