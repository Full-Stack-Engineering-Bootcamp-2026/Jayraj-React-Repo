import React, { useEffect, useRef } from 'react'

function RefDemo() {
    const inputRef = useRef();

    useEffect(() =>{
        inputRef.current.focus();
    },[])

    const handleClick = () =>{
        alert(inputRef.current.value);
    }
  return (
    <div>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default RefDemo
