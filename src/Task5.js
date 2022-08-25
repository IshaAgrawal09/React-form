import React,{ useState } from "react";

const Task5 = () => {
    const [hobbies,setHobbies] = useState([])
    const handler = () => {
        let arr = []
        console.log(document.getElementById('t').checked)
        if(document.getElementById('t').checked)    arr.push('Travelling')
        if(document.getElementById('l').checked) arr.push('Planting')
        if(document.getElementById('v').checked) arr.push('Reading')
        setHobbies(arr)
    }
  return (
    <div className="main">
          <label><input id='t' type="checkbox" name="checkbox" value="value" />Travelling</label>
          <label><input id='l' type="checkbox" name="checkbox" value="value" />Planting</label>
          <label><input id='v' type="checkbox" name="checkbox" value="value" />Reading</label>
          <div><button onClick={handler}>Submit</button></div>
          <div>
            {
                hobbies.map((ele , index) =>{
                    return <p key={index}>{ele}</p>
                }
                    
                )
            }
          </div>
      </div>
  );
};

export default Task5;
