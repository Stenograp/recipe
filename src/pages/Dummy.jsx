import React, { useEffect, useState } from 'react'

const Dummy = () => {
    const [item, setitem] = useState([]);
    async function fethcData(){
        let res = await fetch("https://dummyjson.com/products?posts?skip=0&limit=100")

        let data = await res.json()
        console.log(data.products)
        setitem(data.products)

    }

    // fethcData()
    useEffect(()=>{
        fethcData()
    },[])


    console.log(item)
    
  return (
    <div>
     <div className='row d-flex gap-2 justify-content-center'>
         {item.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
  <img src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <h5 className="card-title text-truncate">price:{ele.price}</h5>
  
    <a href="#" className="btn btn-primary">View Recipe</a>
  </div>
</div>

    })}
   
    </div> 
    </div>
  )
}

export default Dummy