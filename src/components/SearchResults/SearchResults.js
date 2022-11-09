import React, { useEffect } from 'react'
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

export default function SearchResults({ searchResults, onAdd, }) {
    
    const isRemoval = false
    // console.log(isRemoval)
    return (
        <div className="SearchResults">
            <h2>Results</h2>

            <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={isRemoval} />
        </div>
    )
}
