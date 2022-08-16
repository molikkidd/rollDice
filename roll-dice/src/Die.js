import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const Die = (dieOne) => {

console.log(dieOne.dieOne[0])

    return (
        <div className='diceContainer'>
            <div>
            <FontAwesomeIcon icon={dieOne.dieOne[0]} size="10x" color='orange'/>
            </div>
            <div>
            <FontAwesomeIcon icon={faDiceFour} size="10x" color='orange'/>
            </div>
        </div>
    );
}

export default Die;
