import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, changeColor } from './redux/themeSlice';

function App() {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch();
  const [color , setColor] = useState("");

  const handleClick = () =>{
    dispatch(change());
  }
  
  return (
    <>
    
      <div style={{ backgroundColor: theme , display:'flex',justifyContent:'center'}} onClick={handleClick}>COLOR</div>
      <br />
      <input type="text" onChange={(e) =>{
        setColor(e.target.value)
        
      }} value={color}/>

      <button onClick={() =>{
        dispatch(changeColor(color))
      }}>Change</button>
    </>
  )
}

export default App
