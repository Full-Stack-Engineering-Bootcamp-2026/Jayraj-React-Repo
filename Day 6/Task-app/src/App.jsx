import React , { useState } from "react";

function App(){
    const [isLogged , setIsLogged] = useState(false);

    const handleToggle = () => {
      setIsLogged(!isLogged);
    };

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{isLogged ? "Welcome User!" : "Please Login"}</h2>

      <button onClick={handleToggle}>
        {isLogged ? "Logout" : "Login"}
      </button>
    </div>
    )
}

export default App;