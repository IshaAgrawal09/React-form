import React,{ useState } from "react";

const Task3 = () => {
    const [value, setValue] = useState("")
   
  return (
    <div className="task">
      <label htmlFor="days">Choose a Day:  </label>
      <select name="days" id="days" onChange={(event) => setValue(event.target.value)}>
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
        <option value="5" >5</option>
        <option value="6" >6</option>
        <option value="7" >7</option>
      </select>
      <div>{value == "1"? <p>Monday</p>:
      value == "2"?<p>Tuesday</p>:
      value == "3"?<p>Wednesday</p>:
      value == "4"?<p>Thursday</p>:
      value == "5"?<p>Friday</p>:
      value == "6"?<p>Saturday</p>:
       value == "7"? <p>Sunday</p>: null}</div>
    </div>
  );
};

export default Task3;
