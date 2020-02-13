import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import Results from './Results';
import './App.css';

function App() {
    
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
        // eslint-disable-next-line
    }, []);

    function getSongs() {
        fetch('./seeds.json')
            .then(response => response.json())
            .then(response => {
                setSongs(response);
                console.log(response);
            })
            .catch(console.error);
    }

    return (
        <div>
            <h1>Jukebox</h1>
            <Results songs={songs} />
        </div>
    )
}

export default App;
