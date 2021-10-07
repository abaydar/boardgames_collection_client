import React from 'react';
import BoardgamesForm from './BoardgamesForm';

const BoardgamesList = (props) => {
    console.log("props", props.boardgames)
        return (
            <div>
                <BoardgamesForm />
                {props.boardgames.map((bg) => {
                    <ul>
                        <li key={bg._id}>
                            {bg.name}
                        </li>
                    </ul>
                }) }
            </div>
        )
}

export default BoardgamesList


