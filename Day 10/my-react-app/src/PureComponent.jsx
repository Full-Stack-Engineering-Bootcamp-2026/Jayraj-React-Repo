import React, {  useCallback, useState } from 'react'
import MemoComponent from './MemoComponent';
function PureComponent() {
    const [name , setName] = useState('raj');

    useEffect(() =>{
        useCallback(() => {
            setInterval(setName(name),2000)
    },[name]);

    console.log("PureComponent");
  return (
    
    <div>
      <MemoComponent name={name}></MemoComponent>
    </div>
  )
}

export default PureComponent
