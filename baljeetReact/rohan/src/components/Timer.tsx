import { useEffect, useState } from "react";



function Timer() {
    
    const [count,setCount] = useState(0)
     const timerTick = () => {
        setCount(count+1);
     }
    // 
    useEffect(()=>{
        const id = setInterval(timerTick,1000);
        console.log(id);
        return ()=>clearInterval(id);
        // empty dependecy list only once
    },[count])
  return (
    <>
    <h1>{count}</h1>
    </>
  )
}

export default Timer