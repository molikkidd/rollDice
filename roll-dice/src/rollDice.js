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

const [dieOne, setDieOne] = useState(null);
const [dieTwo, setDieTwo] = useState(faDiceOne);

let min = 0;
let max = dieOptions.length
  

const roll = () => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomOne = Math.floor(Math.random() * (max - min) + min);
  let randomTwo = Math.floor(Math.random() * (max - min) + min);

  setDieTwo(dieOptions[randomOne])
  setDieOne(dieOptions[randomTwo])
}

  return (
    <div>
        <Die dieOne={dieOne} dieTwo={dieTwo}/>
        <div className='diceContainer'>
            <button onClick={roll}>Roll Dice!</button>
        </div>
    </div>
  )
}
