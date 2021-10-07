import React, { useEffect, useState } from 'react';
import BoardgamesList from './BoardgamesList';

const BoardgamesContainer = () => {

    const [boardgames, setBoardgames] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(bgs => {
            console.log("bgs", bgs)
            setBoardgames(bgs)
        })
    }, [])

    console.log("boardgames", boardgames.boardgames)

        return (
            <div>
                <BoardgamesList boardgames={boardgames.boardgames} />
            </div>
        )
}

export default BoardgamesContainer