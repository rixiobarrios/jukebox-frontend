import React from 'react';

const Results = ({ songs }) => {
    if (!songs.length) {
        return <h2>No Songs Found</h2>
    }

    return (
        <div className='songlist'>
            <ul>
            {songs.map((song) => 
                <li key={song._id}>
                    <h3>{song.artist} </h3>
                    <h4>{song.name}</h4>
                    <a href={song.url} target="_blank" rel="noopener noreferrer">See Official Video Here</a>
                </li>
                    // {songs.artist}
                    // {songs.name} 
                
            )}
            </ul>
        </div>
    )
}

export default Results;