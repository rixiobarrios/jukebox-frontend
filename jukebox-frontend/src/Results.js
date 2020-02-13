import React from 'react';

const Results = ({ songs }) => {
    if (!songs.length) {
        return <h2>No Songs Found</h2>
    }

    return (
        <div className='songlist'>
            <ul>
            {songs.map((songs, i) => 
                <li key={i}>
                    <li>{songs.artist} </li>
                    <li>{songs.name}</li>
                    <a href={songs.url} target="_blank" rel="noopener noreferrer">See Official Video Here</a>
                </li>
                    // {songs.artist}
                    // {songs.name} 
                
            )}
            </ul>
        </div>
    )
}

export default Results;