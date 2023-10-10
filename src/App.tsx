import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice(): {value:number,isHeld:boolean}[] {
    const NEW_DICE: {value:number,isHeld:boolean}[] = [];
    for (let i = 0; i < 10; i++) {
      NEW_DICE.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return NEW_DICE;
  }
  const diceElements = dice.map((die) => <Dice value={die.value} />);
  return (
    <div className="my-5 flex flex-col items-center justify-center w-3/5 mx-auto border-8 rounded-md border-cyan-700 p-10 h-[90vh]">
      <div className="px-5 grid w-full grid-cols-5 gap-6">{diceElements}</div>

    </div>
  );
}

export default App;
