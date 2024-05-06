import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  let inputRef = useRef();
    const [item, setitem] = useState([]);
    const[ searchitem,setsearhitem]=useState("Mango")
    console.log(searchitem)
    async function fethcData(){
        let res = await fetch(`https://api.edamam.com/search?q=${searchitem}&app_id=249b8c77&app_key=accc417489d9e0dfa317fbc0cb7be4c8`)

        let data = await res.json()
        // console.log(data.hits)
        setitem(data.hits)

    }

    // fethcData()
    useEffect(()=>{
        fethcData()
    },[searchitem])


    console.log(item)
    const handlesubmit=(e)=>{
e.preventDefault()
let objsearch = inputRef.current.value
console.log(objsearch)
if(objsearch){
  setsearhitem(objsearch)
}
}
  
  return (

    
   <div>
<form className="d-flex col-md-6 m-auto my-2" role="search">
  <input ref= {inputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button onClick={handlesubmit} className="btn btn-outline-success" type="submit">Search</button>
</form>

     <div className='row d-flex gap-2 justify-content-center'>
         {item.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
  
    <Link state={ele} to="/recipe" className="btn btn-primary">View Recipe</Link>
  </div>
</div>

    })}
   
    </div>
   </div>
  )
}

export default Home