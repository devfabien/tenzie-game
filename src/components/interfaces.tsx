 export interface NewDice{
    id: string, value: number, isHeld: boolean
 }
 export interface Props{
    value: number,
    isHeld: boolean,
    holdDice:()=>void
 }