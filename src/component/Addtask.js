import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, filter } from './redux/actions'


const Addtask = () => {
    const [text, setText] = useState("")
    const handleChange =(e)=> 
{
    setText(e.target.value)
}

const dispatch = useDispatch();
const handleSubmit =(e) => 
{
    e.preventDefault()
    
    
    text.trim() === "" ? alert ("write your todo") : dispatch (add(text)) ;
    
    setText("")  ;
    
}

  return (
    <div>
        <h1> To do App Redux</h1>
        <form onSubmit={handleSubmit}>
            <input  type='text' value={text} onChange={handleChange}/>
            <button type='submit'> Add Task </button>

        </form>
        <button onClick={() => dispatch(filter()) }>Filter</button>
    </div>
  )
}

export default Addtask