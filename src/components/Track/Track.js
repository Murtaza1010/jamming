import React from 'react'
import './Tracks.css';
export default function Track({ track, isRemoval, onAdd, removeTrack }) {
    // function renderAction() {
    //     if (isRemoval) {
    //         return <button onClick={() => removeTrack(track)} className="Track-action">-</button>
    //     }
    //     else {
    //         return <button onClick={onAdd(track)} className="Track-action">+</button>
    //     }

    // }

    console.log()

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {/* {renderAction()} */}
            {isRemoval ? <button onClick={() => removeTrack(track)} className="Track-action">-</button>
                : <button onClick={()=> onAdd(track)} className="Track-action">+</button>}
        </div>
    )
}

