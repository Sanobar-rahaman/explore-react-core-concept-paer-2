import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const handleAdd =()=>{
        const newCont = count+1;
        setCount(newCont)

    }
     const handleDelete =()=>{
        const prevCount = count-1;
        setCount(prevCount)
     }
    return(
        <div style={{border:'2px solid red'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}