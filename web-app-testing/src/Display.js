import React, { useState } from 'react';

function Display() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    function clear() {
        setBalls(0)
        setStrikes(0)
        setFouls(0)
        setHits(0)
    }

    function newBat() {
        if (strikes > 2) {
            clear()
        } if (balls > 3) {
            clear()
        } if (hits > 0) {
            clear()
        } if (fouls === 1 && strikes === 0) {
            setStrikes(strikes + 1)
        } if (fouls === 2 && strikes === 1) {
            setStrikes(strikes + 1)
        }
    }

    newBat()
    
    return (
        <>
            <h3>Strikes: {strikes}</h3>
            <h3>Balls: {balls}</h3>
            <h3>Fouls: {fouls}</h3>
            <h3>Hits: {hits}</h3>
            
            <div className='Dashboard'>
                <button onClick={() => setStrikes(strikes + 1)}>Strike</button>
                <button onClick={() => setBalls(balls + 1)}>Ball</button>
                <button onClick={() => setFouls(fouls + 1)}>Foul</button>
                <button onClick={() => setHits(hits + 1)}>Hit</button>
            </div>
        </>
    )
}

export default Display