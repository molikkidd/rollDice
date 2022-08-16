import logo from './logo.svg';
import './App.css';
import Die from './Die';
import RollDice from './rollDice';

function App() {
  return (
    <div >

     <div className='container'>
      <Die/>
      </div>
      <div className='App' >
          <RollDice/>
      </div>
    </div>
  );
}

export default App;
