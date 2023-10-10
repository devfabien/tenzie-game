export default function Dice({value}:{value:number|string}){
    return(
        <div className="border hover:bg-slate-100 my-3 px-4 py-2 rounded-md flex items-center shadow-md justify-center">
            <button className="text-4xl font-bold ">{value}</button>
        </div>
    )
}