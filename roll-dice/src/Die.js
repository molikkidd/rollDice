import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const Die = () => {
    return (
        <div className='diceContainer'>
            <div>
            <FontAwesomeIcon icon={faDiceOne} size="10x" />
            </div>
            
            <div>
            <FontAwesomeIcon icon={faDiceFour} size="10x" />
            </div>
        </div>
    );
}

export default Die;
