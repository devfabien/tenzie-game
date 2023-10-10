import { Props } from "./interfaces";

export default function Dice({
  value,
  isHeld,
  holdDice,
}: Props) {
  return (
    <div onClick={holdDice}
      className={` border my-3 px-4 py-2 rounded-md flex items-center shadow-md justify-center`}
    >
      <button className="text-4xl font-bold ">{value}</button>
    </div>
  );
}
