import React from 'react';

const Results = ({ songs }) => {
    // if (!songs.length) {
    //     return <h2>No Songs Found</h2>
    // }

    return (
        <div>
            {songs.find(songs => (
                <div key={songs.id}>
                    {songs.artist}
                </div>
            ))}
        </div>
    )
}

export default Results;