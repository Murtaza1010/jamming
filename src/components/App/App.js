import React, { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from "../SearchBar/SearchBar"
import Playlist from '../Playlist/Playlist';
import './App.css'
import TrackList from '../TrackList/TrackList';


import Spotify from '../../util/Spotify';


export default function App() {
    const [searchResults, setSearchResults] = useState([])

    // create state that stores a song 
    const [playListName, setplayListName] = useState('')
    const [playListTracks, setplayListTracks] = useState([])
    const [searchTerm, setSearchTerm] = useState('');





    function addTrack(track) {
        // check if track exist in playlisttracks
        if (playListTracks.find(savedTrack => savedTrack.id === track.id)) {
            console.log("won't add, as track already in the list")
            return;
        } else {
            setplayListTracks(oldArr => [...oldArr, track])

        }
        //track does not exist in the playlisttracks so add Track to the playListTracks.
        // setplayListTracks(track]);

    }
    function removeTrack(track) {
        // // find the position of the track within the array PlayListTracks

        const tracks = playListTracks;

        const index = tracks.indexOf(track);
        if (index > -1) {

            // // remove the element that exists within that position it he playListTracks
            tracks.splice(index, 1);
            console.log(playListTracks)
        }
        setplayListTracks([...tracks])
    }



    function savePlayList() {
        const trackUris = playListTracks.map(track => track.uri);
        Spotify.savePlayList(playListName, trackUris).then(() => {
            setplayListName('New PlayList')
            setplayListTracks([])
            setSearchResults([])
        })

    }

    function search(term) {
        Spotify.search(term).then(resultSearch => setSearchResults(resultSearch));

    }


    // console.log(updatePlayListName)



    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">

                <SearchBar onSearch={search}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm} />
                <div className="App-playlist">

                    <SearchResults searchResults={searchResults} onAdd={addTrack} />


                    <Playlist
                        playListName={playListName}
                        playListTracks={playListTracks}
                        removeTrack={removeTrack}

                        onSave={savePlayList}
                        setplayListName={setplayListName}
                    />

                </div>

            </div>
        </div>
    )
}

