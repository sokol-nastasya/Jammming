import React from 'react';
import Tracklist from '../TrackList/Tracklist';
import './Playlist.css';


function Playlist({selectedAlbum}) {
    return(
        <div>
            <h2>Playlist:</h2>
            <Tracklist album={selectedAlbum}></Tracklist>
            <button className='btn-save'>Save To Spotify</button>
        </div>
    )
};

export default Playlist;