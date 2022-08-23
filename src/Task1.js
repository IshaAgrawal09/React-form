import React,{ useState } from 'react'

const Task1 = () => {
    const [text,setText]  = useState("")
    const [variable,setVariable] = useState("")

    const show = () =>{
        setVariable(text)
    }

  return (
    <div className=' task task1'>
        <input type="number" id='text' value={text} onChange={(event) => setText(event.target.value)}/>
        <button   onClick={show}>SHOW</button>
        <div id='show'>{variable}</div>
    </div>
  )
}

export default Task1