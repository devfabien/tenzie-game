import { useState,useEffect } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import {NewDice} from "./components/interfaces"

function App() {
  const width=window.innerWidth;
  const height=window.innerHeight;
  const [dice, setDice] = useState(allNewDice());
  const [tenzie, setTenzie]=useState(false)

  useEffect(() => {
   const allHeld =dice.every(dice=>dice.isHeld);
   const firstValue=dice[0].value
   const allValues=dice.every(dice=>dice.value===firstValue)
   if(allHeld && allValues){
    setTenzie(true)
   }

  }, [dice])
 
  function generateNewDice(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }
  }
  function allNewDice():NewDice[] {
    const NEW_DICE: NewDice[] = [];
    for (let i = 0; i < 10; i++) {
      NEW_DICE.push(generateNewDice());
    }
    return NEW_DICE;
  }

  function rollDice() {
    if(!tenzie){
    setDice(oldDice=>oldDice.map(die=> {
      return die.isHeld? die:generateNewDice()
    }));}else{
      setTenzie(false)
      setDice(allNewDice())
    }
  }

function holdDice(id:string){
  setDice(oldDice=>oldDice.map(die=>{
    return die.id===id ?{...die,isHeld:!die.isHeld}:
    die
  }))
}

  const diceElements = dice.map((die) => (
    <Dice key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>
  ));
  return (
    <>
    {tenzie && <Confetti width={width} height={height}/>}
    <div className="my-5 flex flex-col items-center justify-between lg:w-1/2 md:mx-auto border-8 rounded-md border-cyan-700 p-10 h-[90vh]">
    <div><h2 className="py-4 font-bold text-4xl">Tenzies Game</h2>
        <h2 className="text-xl pt-10">Roll until all dice are the same. 
              Click each die to freeze it at its current value between rolls.</h2>
        </div>
      <div className="grid w-full grid-cols-5 gap-6">{diceElements}</div>
      <button
        onClick={rollDice}
        className="mt-10 rounded-md py-3 text-white text-xl font-medium px-8 bg-blue-500 hover:bg-blue-700"
      >
        {tenzie?"New Game":"Roll"}
      
      </button>
    </div>
    </>
  );
}

export default App;
