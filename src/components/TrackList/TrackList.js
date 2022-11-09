import React from 'react'
import './TrackList.css';

import Track from "../Track/Track";

export default function TrackList({ tracks, onAdd, isRemoval, removeTrack }) {
    // console.log(tracks)
    return (

        <div className="TrackList">
            {tracks?.map((track, index) =>
                <Track key={index} track={track} isRemoval={isRemoval} onAdd={onAdd} removeTrack={removeTrack} />
            )
            }

        </div>

    )
}
