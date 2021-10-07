import React, { useState } from 'react';

const BoardgamesForm = () => {

    const [name, setName] = useState("")
    const [yearPublished, setYearPublished] = useState("")
    const [image, setImage] = useState("")
    const [minPlayers, setMinPlayers] = useState("")
    const [maxPlayers, setMaxPlayers] = useState("")
    const [playingTime, setPlayingTime] = useState("")

    const addBoardgame = (bg) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bg)
        }

        fetch('http://localhost:3000/boardgames', configObj)
        .then(res => res.json())
        .then(bg => console.log(bg))
        .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addBoardgame({name, yearPublished, image, minPlayers, maxPlayers, playingTime})
        setName("")
        setYearPublished("")
        setImage("")
        setMinPlayers("")
        setMaxPlayers("")
        setPlayingTime("")
    }

        return (
            <div>
                Add a new Boardgame
                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                    <label>Year Published: </label>
                    <input type="text" value={yearPublished} onChange={(e) => setYearPublished(e.target.value)} name="yearPublished"/>
                    <label>Image: </label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} name="image"/>
                    <label>Min Players: </label>
                    <input type="text" value={minPlayers} onChange={(e) => setMinPlayers(e.target.value)} name="minPlayers"/>
                    <label>Max Players: </label>
                    <input type="text" value={maxPlayers} onChange={(e) => setMaxPlayers(e.target.value)} name="maxPlayers"/>
                    <label>Playing Time (minutes): </label>
                    <input type="text" value={playingTime} onChange={(e) => setPlayingTime(e.target.value)} name="playingTime"/>
                    <input type="submit" value="Add Boardgame"/>
                </form>
            </div>
        )
}

export default BoardgamesForm