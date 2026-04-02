import React, { useState } from 'react'
import Model from './Model'
function ModelPage() {
    const [showModel , setShowModel] = useState(false);

    const handleClick = () => {
        setShowModel(true);
    };

    const handleClose =() =>{
        setShowModel(false);
    }
  return (
    <div>
        <button onClick={handleClick}>Open Model</button>
      {showModel && <Model onClose={handleClose}/>}
    </div>
  )
}

export default ModelPage
