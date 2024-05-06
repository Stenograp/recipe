import React, { useRef, useState } from 'react'

const Dummy = () => {

  // let nameRef= useRef()
  // let emailRef= useRef()
  // let passwordRef= useRef()
  // let addressRef= useRef()

  // const handleSubmit =(event)=>{
  //   event.preventDefault();
  //   // e.preventDefault();

  //   let obj={
  //     name:nameRef.current.value,
  //     email:emailRef.current.value,
  //     password:passwordRef.current.value,
  //     address:addressRef.current.value
  //   }
  //   console.log(obj)
  // }
  const [nameValue, setnameValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [addressValue, setaddressValue] = useState("");
  // console.log(nameValue)
  const nameChanger =(event)=>{
    let name = event.target.value
    // console.log(name)
    setnameValue(name)
  }
  const emailChanger =(event)=>{
    // console.log(event.target.value)
    setEmailValue(event.target.value)
  }
  const passwordChanger =(event)=>{
    // console.log(event.target.value)
    setPasswordValue(event.target.value)
  }
  const addressChanger =(event)=>{
    // console.log(event.target.value)
    setaddressValue(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    let obj={
      name:nameValue,
      email:emailvalue,
      password:passwordValue,
      address:addressValue
    }
    console.log(obj)
  }
  return (
    <div className='dummy'>
      {/* <form action="">
        <label htmlFor="">Name</label>
        <input type="text" ref={nameRef}/>
        <label htmlFor="">Email</label>
        <input type="email" ref={emailRef}/>
        <label htmlFor="">Password</label>
        <input type="password"  ref={passwordRef}/>
        <label htmlFor="">Address</label>
        <textarea ref={addressRef} name="" id="" cols="30" rows="6"></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form> */}
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" id='name' onChange={nameChanger}/>
        <label htmlFor="">Email</label>
        <input type="email" onChange={emailChanger} />
        <label htmlFor="">Password</label>
        <input type="password"  onChange={passwordChanger}/>
        <label htmlFor="">Address</label>
        <textarea onChange={addressChanger}  name="" id="" cols="30" rows="6"></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Dummy