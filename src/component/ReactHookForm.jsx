import React from "react";
import {useForm} from "react-hook-form"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';



let r = 0

const schema = yup.object().shape({

firstname: yup.string().required("please enter firname") ,
lastname: yup.string().required("please enter lastname") ,
age: yup.number().integer().positive().required("please enter age") ,
email: yup.string().email("please enter valid email").required("please enter email") ,
password: yup.string().required().min(4,"please enter min 4").max(12,"please enter max 12") ,
cpassword:yup.string().required().oneOf(  [yup.ref("password",),null],"please enter crdct")


})
export default function ReactHookForm() {


    const {register,handleSubmit,formState:{errors},watch} = useForm(
      {
        resolver:yupResolver(schema)
      }
    )

    const onsubmit=(data)=>{
        console.log(data);
       

    }
   
    console.log(errors);
    r++  
     let rooo = watch("fistname") 
  return (
    <div>
        {r}
      <form  onSubmit={handleSubmit(onsubmit)}>
        <input {...register("firstname")} type="text" placeholder="Firstname" />
        
        
        
        <br/>        <br/>


<p>{errors?.firstname?.message}</p>
<p> {rooo} </p>
        <input {...register("lastname")} type="text" placeholder="LastNmae" />
        <br/>        <br/>
        <p>{errors?.lastname?.message}</p>

        <input {...register("age")} type="number" placeholder="Age" />
        <br/>        <br/>
        <p>{errors?.age?.message}</p>

        <input {...register("email")} type="text" placeholder="Email" />
        <br/>        <br/>
        <p>{errors?.email?.message}</p>

        <input {...register("password")} type="text" placeholder="Password" />
        <br/>        <br/>
        <p>{errors?.password?.message}</p>

        <input {...register("cpassword")} type="text" placeholder="Conform Password" />
        <p>{errors?.cpassword?.message}</p>

        <br/>        <br/>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
}
