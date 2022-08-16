import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const Die = (dieOne,dieTwo) => {

    return (
        <div className='diceContainer'>
            <div>
            <FontAwesomeIcon icon={dieOne.dieOne} size="10x" color='orange'/>
            </div>
            <div>
            <FontAwesomeIcon icon={dieOne.dieTwo} size="10x" color='orange'/>
            </div>
        </div>
    );
}

export default Die;
