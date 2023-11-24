import React from "react";
import './Track.css'

function Track({track, onAddToPlaylist}) {
    if (!track){
        return null;
    }

    return (
        <div className="card">
            <div className="title">
                    <h3>{track.name}</h3>
                </div>
            <div className='track_card'>
                
            <div className="photo">
                <img src={track.images[1].url} ></img>
            </div>
            <div className="about">
                <p>{track.artists[0].name}</p>
                <p>{track.release_date}</p>
                <button className="btn_add" onClick={() => onAddToPlaylist(track)}>+</button>
            </div>

            </div>
        </div>
    )
};

export default Track;