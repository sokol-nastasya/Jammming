import React from 'react';
import Track from '../Track/Track';

function Tracklist({album = [], onAddToPlaylist}) {
    return (
        <div>
            {album.map(track => (
                <Track key={track.id} track={track} onAddToPlaylist={onAddToPlaylist}></Track>
            ))}
        </div>
    );
};

export default Tracklist;