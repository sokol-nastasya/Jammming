import React from 'react';
import Tracklist from '../TrackList/Tracklist';
import './SearchResults.css';

function SearchResult({album, addAlbumToPlaylist}) {
    return (
        <div className='card'>
            <h2>Search Result:</h2>
            <Tracklist album={album} onAddToPlaylist={addAlbumToPlaylist}></Tracklist>
        </div>
    );
}

export default SearchResult;