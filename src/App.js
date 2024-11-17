// React Hooks ----
// useState
import { useState, useEffect } from "react";
function App(){
  const [value,setvalue] = useState(0);
  // function increase(){
  //   // console.log(preValue);
  //   setCount((test) => test + 1);
  //   setCount((test) => test + 1);
  // }

  useEffect(() => {
    console.log('learn useEffect funciton');
  },[]);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() =>setvalue(value+1) } style={{ padding:"0.5erm"}}>+</button>
    </div>
  );
  
}

export default App;
