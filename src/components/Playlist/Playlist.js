import React from 'react'
import './Playlist.css'

import TrackList from '../TrackList/TrackList'
export default function Playlist({ playListName, playListTracks, removeTrack, onSave, setplayListName }) {

    const isRemoval = true;   
    
    // console.log(playListName)
    return (
        <div className="Playlist">
            {/* using the inital playlistname state from App.js.  */}
            <input placeholder='New Playlist' value={playListName} onChange={(e) => setplayListName(e.target.value)}/> 
            <TrackList tracks={playListTracks} isRemoval={isRemoval} removeTrack={removeTrack} />
            <button className="Playlist-save" onClick={() => onSave()}>SAVE TO SPOTIFY</button> 

            
        </div>
    )
}
