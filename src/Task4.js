import React,{ useState } from 'react'

const Task4 = () => {
    const [color,setColor] = useState("black")
    const [bg,setBg] = useState("white")
    const dark = () =>{
        setColor("white")
        setBg("black")
    }
    const light = () =>{
        setColor("black")
        setBg("white")
    }
  return (
    <div className='task task4' style={{color: color, backgroundColor: bg}}>
        <h1>TASK 4</h1>
        <button onClick={dark}>Dark Mode</button>
        <button onClick={light}>Light Mode</button>
    </div>
  )
}

export default Task4