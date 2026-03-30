import { Link } from "react-router-dom";
import { useContext } from "react";
import SportContext from "../context/SportContext";

function Navbar() {
    const { sport } = useContext(SportContext);
  return (

    

    <nav>
      <h2>Sports Hub ({sport})</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/players">Players</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;