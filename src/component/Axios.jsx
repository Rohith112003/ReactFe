import axios from "axios";
import React, { useEffect } from "react";
import { useState ,useId} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let uuid =  uuidv4()
  const [input, setinput] = useState("");
  const [todolist, settodolist] = useState([])

  const fetchdata = async()=>{
    let res =  await axios.get("http://localhost:3000/todoList")
    console.log(res.data);
    settodolist(res.data)
  }

  useEffect(()=>{
    fetchdata()
  },[])


  const handlechange = (e) => {
    setinput(e.target.value);
  };

  const handleADD = async () => {
    let adddata = { id: uuid, task: input }

    await axios.post("http://localhost:3000/todoList" ,adddata)

    fetchdata()


    // console.log(uuid);
    // settodolist([...todolist, adddata]);
    // setinput("")
  };

  const handledelete = async (did)=>{

    // const deletetode = todolist.filter(todo=> todo.id !== did)
    await axios.delete(`http://localhost:3000/todoList/${did}`)
    fetchdata()
    // settodolist(deletetode)

  }

  const handleupdate =  async (i)=>{
console.log(i);
let update = prompt("enter ur updated task",todolist[i].task)
await axios.put(`http://localhost:3000/todoList/${todolist[i].id}`,{id:todolist[i].id,task:update})




// const copiarr = [...todolist]
// copiarr[i].task = update
// settodolist(copiarr)
// console.log(update);
  }
  return (
    <div>

      <input
        placeholder="enter u r todo"
        value={input}
        onChange={handlechange}
      />
      <button onClick={handleADD}>Add</button>

      {todolist.map((todo, index) => (
        <div key={index}>
          <h1>{todo.task}</h1>
          <button onClick={()=>handledelete(todo.id)}>x</button>
          <button onClick={()=>handleupdate(index)}>Update</button>
        </div>
      ))}


    </div>
  );
}
