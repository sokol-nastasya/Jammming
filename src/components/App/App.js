import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResults';
import Playlist from '../Playlist/Playlist';
import React, { useState, useEffect } from 'react';


const CLIENT_ID = "afecf58134e046ddbe0403b0973c83a7";
const CLIENT_SECRET = "f9c7ee4dd485485e9bc48021a560502a";


function App() {
  const [searchResault, setSearchResault] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [album, setAlbum] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState([]);

  useEffect(() => {
    // API access token
    let authParameter = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    fetch('https://accounts.spotify.com/api/token', authParameter)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, []);

  // Search
  async function search(query) {
    console.log("Searching for " + query);

    // Get request using search to get the Artist ID

    let searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    let artistId = await fetch('https://api.spotify.com/v1/search?q=' + query + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => {return data.artists.items[0].id})

    console.log("Artist ID is " + artistId);
    
    // Get request with Artist ID grab all the albums from the artist
    
    let returnAlbum = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAlbum(data.items);
      })
  }
  console.log(album);

  // Function to add album to Playlist
  const addAlbumToPlaylist = (selectedAlbum) => {
    setSelectedAlbum(prevAlbum => [...prevAlbum, selectedAlbum]);
  };



  return (
    <div className='app'>
      <div>
        <h1>Welcom, to Ja<span className='highlighted'>mmm</span>ing</h1>
      </div>
      <div>
        <SearchBar onSearch={search}></SearchBar>
        <div className='result'>
          <SearchResult album={album} addAlbumToPlaylist={addAlbumToPlaylist}></SearchResult>
          <Playlist selectedAlbum={selectedAlbum}></Playlist>
        </div>
        
      </div>
      
    </div>
  )
}

export default App;
