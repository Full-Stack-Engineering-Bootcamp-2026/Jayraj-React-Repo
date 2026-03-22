import "./SearchBar.css"
import { useState } from "react";

function SearchBar({ onSubmit }) {

    const [term ,setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault(); //to prevent form default behaviour
        
        onSubmit(term);

    };

    const handleChage  = (event) => {
        setTerm(event.target.value);
    };

    // const handleClick = () => {
    //     onSubmit('cars');
    // }
    return (

        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">Enter Search Term</label>
                <input value={term} onChange={handleChage}/>
            </form>
            {/* <button onClick={handleClick}>Click</button> */}
        </div>
    );
}

export default SearchBar;
