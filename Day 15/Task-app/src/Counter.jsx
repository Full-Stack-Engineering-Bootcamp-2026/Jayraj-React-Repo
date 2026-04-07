import {useReducer} from 'react'


function reducer(state ,action){
    switch(action.type){
        case "INC":
            return {count: state.count+1};
        case "DEC":
            return {count:state.count-1};
        case "RESET":
            return {count : 0};
        
        default:
            return state;
    }
}

function Counter() {

    const [state , dispatch] = useReducer(reducer , {count:0});
  return (
    <>
        <h2>{state.count}</h2>
        
        <button onClick={() => dispatch({type : "DEC"})}>-</button>
        <button onClick={() => dispatch({type : "INC"})}>+</button>
        <button onClick={() => dispatch({type : "RESET"})}>Reset</button>


    </>
  )
}

export default Counter
