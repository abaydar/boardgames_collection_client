import React, { useEffect } from 'react';
import BoardgamesForm from './BoardgamesForm';

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
                <BoardgamesForm />
            </div>
        )
}

export default BoardgamesList