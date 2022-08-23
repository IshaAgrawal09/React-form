import React,{ useState } from 'react'

const Task2 = () => {
    const [text,setText] = useState("")
    const uppercase = () =>{
        setText(text.toUpperCase())
    }
  return (
    <div className='task'>
        <input type='text' id='text' value={text} onChange={(event)=> setText(event.target.value)}/>
        <button onClick={uppercase}>UPPERCASE</button>
    </div>
  )
}

export default Task2