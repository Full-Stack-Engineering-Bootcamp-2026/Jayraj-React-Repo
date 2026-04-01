import Dropdown from "./components/Dropdown";
import { useState } from "react";
function App(){

  const [selection , setSelection] = useState(null);


  const handleSelection = (option) =>{
    setSelection(option);
  }

  const options =[
    {label:"Red" , value:'red'},
    {label:"Green",value:'green'},
    {label:'Blue',value:'blue'},
  ];

  return <div style={{margin :"40px" }}>
    <Dropdown options={options} value={selection} onChange={handleSelection}/>
    </div>
}

export default App;