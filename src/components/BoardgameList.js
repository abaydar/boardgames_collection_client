import React, { useEffect } from 'react';

const BoardgamesList = () => {

    useEffect(() => {
        fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(bgs => {
            console.log(bgs)
        })
        .catch(e => console.log(e))
    }, [])

        return (
            <div>
                Boardgames List
            </div>
        )
}

export default BoardgamesList