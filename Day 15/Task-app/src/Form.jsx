import {useReducer} from 'react'

function reducer( state ,action){
    switch(action.type){
        case "UPDATE_FIELD":
            return{
                ...state,
                [action.field]: action.value
            };
        case "RESET":
            return{
                name:"",
                email:"",
                password:""
            };
        default:
            return state;
    }
}

function Form() {
    
    const [state , dispatch] = useReducer(reducer ,{
        name:"",
        email:"",
        password:""
    } );



  return (
    <>
      <input 
        placeholder='Name'
        value={state.name}
        onChange={(e) =>
            dispatch({
                type :"UPDATE_FIELD",
                field:"name",
                value:e.target.value
            })
        }
        />
    <br />
        <input
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value
          })
        }
      />
<br />
      <input
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value
          })
        }
      />
<br />
        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        <br />
        <span>Name : {state.name}</span>
        <br />
        <span>Email : {state.email}</span>
        <br />
        <span>Password : {state.password}</span>
    </>
  )
}

export default Form;
