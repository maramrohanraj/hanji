import Child from './Child'
import { useState } from 'react';

function Parent() {
    const [data,setData] = useState("Hi");
  return (
    <>
    <div>Parent</div>
    <Child data={data} code={setData}></Child>
    </>
  )
}

export default Parent