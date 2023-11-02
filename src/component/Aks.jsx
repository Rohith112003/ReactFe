import axios from "axios";
import React from "react";
import { useState ,useId} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let uuid =uuidv4()
  const [input, setinput] = useState("");
  const [todolist, settodolist] = useState([])

  const fetchdata = async()=>{
    let res = axios.get("")
  }
  //   {
  //     id: 1,
  //     task: "brush",
  //   },
  //   {
  //     id: 2,
  //     task: "eat"
  //   },
  //   {
  //     id: 3,
  //     task: "wrk"
  //   },
  //   {
  //     id: 4,
  //     task: "sleep"
  //   }
  // ])




  const handlechange = (e) => {
    setinput(e.target.value);
  };

  const handleADD = () => {
    console.log(uuid);
    settodolist([...todolist, { id: uuid, task: input }]);
    setinput("")
  };

  const handledelete = (did)=>{

    const deletetode = todolist.filter(todo=> todo.id !== did)
    settodolist(deletetode)

  }

  const handleupdate = (i)=>{
    console.log(i);
    let upp = prompt("enter your task",todolist[i].task)

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
          <button onClick={()=>handleupdate(index)}>update</button>
        </div>
      ))}

    </div>
  );
}