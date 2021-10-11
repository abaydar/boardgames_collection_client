import React, { useEffect, useState } from 'react';
import BoardgamesList from './BoardgamesList';

const BoardgamesContainer = () => {

    const [boardgames, setBoardgames] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(bgs => {
            setBoardgames(bgs)
        })
    }, [])

        return (
            <div>
                <BoardgamesList boardgames={boardgames} />
            </div>
        )
}

export default BoardgamesContainer