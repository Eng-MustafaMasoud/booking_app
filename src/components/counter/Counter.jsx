import React,{useState} from 'react'
import './Counter.scss'
import {MdPerson} from 'react-icons/md'

const Counter = ({counter,setCounter}) => {

  const [openOptions,setOpenOptions]=useState(false)
 
  
  const handleClick=(name,op)=>{
    setCounter((prev)=>{
      return {

        ...prev, [name]:op==='i'? counter[name]+1 : counter[name] - 1
      }
      
    })

  }
  return (
    <div className='counter' >
       <MdPerson/>
      <span onClick={()=>setOpenOptions(!openOptions)}>{counter.adult} adults | {counter.children} children | {counter.rooms} room </span>
      {
        
        openOptions && 
       <div className="count">
         <div className="option">
           <span className="text-count">Adult</span>
           <div className="option-counter">

           <button  onClick={()=>handleClick('adult','i')}>+</button>
           <span>{counter.adult }</span>
           <button className="disabled" disabled={counter.adult<=1} onClick={()=>handleClick('adult','d')}>-</button>
           </div>
         </div>
         <div className="option">
           <span className="text-count">Children</span>
           <div className="option-counter">

           <button onClick={()=>handleClick('children','i')}>+</button>
           <span>{counter.children}</span>
           <button className="disabled" disabled={counter.children<=0}onClick={()=>handleClick('children','d')}>-</button>
           </div>
         </div>
         <div className="option">
           <span className="text-count">Rooms</span>
           <div className="option-counter">

           <button onClick={()=>handleClick('rooms','i')}>+</button>
           <span>{counter.rooms}</span>
           <button className="disabled" disabled={counter.rooms<=1} onClick={()=>handleClick('rooms','d')}>-</button>
           </div>
         </div>
        
      
        
       </div>
        
        
      }

      
    </div>
  )
}

export default Counter