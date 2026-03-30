import { useContext } from "react";
import SportContext from "../context/SportContext";

function Home() {
   const { setSport } = useContext(SportContext); 
  return (
    <div className="home">
      <h1>Sports Hub</h1>

      <button onClick={() => setSport("Basketball")}>
        Basketball
      </button>

      <button onClick={() => setSport("Football")}>
        Football
      </button>

      <div className="hero">
        <h2>Basketball</h2>
        <p>Fast, exciting, and full of energy.</p>
      </div>
    </div>
  );
}

export default Home;