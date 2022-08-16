import React, {useState} from 'react'
import Die from './Die'

export default function RollDice() {

const [dieOne, setDieOne] = useState(null);
const [dieTwo, setDieTwo] = useState(null);


const roll = () => {

}

  return (
    <div>
        <Die dieOne={dieOne} dieTwo={dieTwo}/>
        <div className='diceContainer'>
            <button>Roll Dice!</button>
        </div>
    </div>
  )
}
