import React, {useState} from 'react'
import Die from './Die'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

export default function RollDice() {

const dieOptions = [
  faDiceOne, 
  faDiceTwo, 
  faDiceThree, 
  faDiceFour, 
  faDiceFive, 
  faDiceSix
]

const [dieOne, setDieOne] = useState(dieOptions);
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
