import React, { useState } from 'react'
import './Form.css'
const Form = () => {
const [name, setnamevalue] = useState("");
const [email, setemail] = useState("");
const [Password, setpassword] = useState("");
const [Address, setAddress] = useState("");

    const namevalue=(event)=>{
        setnamevalue(event.target.value)
    }
    const emailvalue=(event)=>{
      setemail(event.target.value)
    }
    const passwordvalue=(event)=>{
      setpassword(event.target.value)
    }
    const addressvalue=(event)=>{
      setAddress(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.prevebtDefault()
    }
    let obj={
      name:name,
      email:email,
      password:Password,
      address:Address
    }
    console.log(obj)

  return (
    <div >
      <form action="" className='Form'>
        <label htmlFor="">Name</label>
        <input type="text" onChange={namevalue}/>
        <label htmlFor="">Email</label>
        <input type="text" onChange={emailvalue} />
        <label htmlFor="">Password</label>
        <input type="text" onChange={passwordvalue}/>
        <label htmlFor="">Address</label>
        <textarea onChange={addressvalue}  name="" id="" cols="30" rows="6"></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
