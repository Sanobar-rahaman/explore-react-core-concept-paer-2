import { useState } from "react"

export default function Team(){
    const[count,setPlyer]=useState(0)
    const addPlyer =()=>{
       const  newPlyer = count+1;
        setPlyer(newPlyer)
    }
     const handleRemove =()=>{
        const newPlyer = count-1;
        setPlyer(newPlyer)
     }

    const TeamStyle={
        border:'2px solid blue',
        margin:'15px',
        padding:'15px',
        borderRadius:'30px'
    }
    
   
    return(
        <div style={TeamStyle}>
            <h3>Plyers:{count}</h3>
            <button onClick={addPlyer}>add</button>
            <button onClick={handleRemove}>reduce</button>
        </div>
    )
}