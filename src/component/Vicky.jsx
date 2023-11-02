import React, { useState } from 'react'


export default function Vicky() {
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [age,setage]=useState("")
    const [numbername,setnumber]=useState("")

    const handlefname=(e)=>{
        console.log("react class",e);
        setfname(e.target.value)
    }

    const handlelname=(e)=>{
        console.log("react class",e);
        setlname(e.target.value)
    }

        const handleage=(e)=>{
            console.log("react class",e);
            setage(e.target.value)
    }
            const handlenumber=(e)=>{
                console.log("react class",e);
                setnumber(e.target.value)
    }

         const handlesumbit=()=>{


         }


  return (
    <div>
        <from>
            <label>Fist name : </label>
            <input type="type"  value={fname} onChange={handlefname}/>
            <br/>
            <br/>
            <label>Last name : </label>
            <input type="type"  value={lname}  onChange={handlelname}/>
            <br/>
            <br/>
            <label>Age : </label>
            <input type="type"  value={age}  onChange={handleage}/>
            <br/>
            <br/>
            <label>number : </label>
            <input type="number" value={numbername}  onChange={handlenumber}/>


            <p> Your Fistname:{fname}</p>
            <p> Your lastname:{lname}</p>
            <p> Your age:{age}</p>
            <p> Your Number:{Number}</p>


            <button onClick={handlesumbit}>submit</button>

        </from>
    
    
    
    
    
    </div>
  )
}
