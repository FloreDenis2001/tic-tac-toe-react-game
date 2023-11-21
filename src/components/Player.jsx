import { useState } from 'react'

export default function Player({ name, symbol,isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    let editPlayName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editPlayName = (
            <input
                type="text"
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    function handleEdit() {
        setIsEditing((editing)=>!editing);
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }



    return (

        <li className={isActive? 'active':undefined}>
            <span className="player">
                {editPlayName}
                < span className="player-symbol">{symbol}</span>
                < button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li >

    );
}