import { useState} from "react";
import Dice from "./components/Dice";

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice():number[] {
    const NEW_DICE: number[] = [];
    for (let i = 0; i < 10; i++) {
      NEW_DICE.push(Math.ceil(Math.random() * 6));
    }
    return NEW_DICE;
  }

  function rollDice() {
    setDice(allNewDice())
  }



  const diceElements = dice.map((die) => (
    <Dice value={die}/>
  ));
  return (
    <>
   
    <div className="my-5 flex flex-col items-center justify-between md:w-3/4 lg:w-1/2 md:mx-auto border-8 rounded-md border-cyan-700 p-10 h-[90vh]">
    <div><h2 className="py-4 font-bold text-4xl">Tenzies Game</h2>
        <h2 className="text-xl pt-10">Roll until all dice are the same. 
              Click each die to freeze it at its current value between rolls.</h2>
        </div>
      <div className="grid w-full grid-cols-5 gap-6">{diceElements}</div>
      <button
        onClick={rollDice}
        className="mt-10 rounded-md py-3 text-white text-xl font-medium px-8 bg-blue-500 hover:bg-blue-700"
      >
       Roll
      
      </button>
    </div>
    </>
  );
}

export default App;
