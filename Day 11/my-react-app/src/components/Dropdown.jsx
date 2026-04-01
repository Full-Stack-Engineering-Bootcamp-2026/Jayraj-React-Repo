import React, { useState, useEffect, useRef } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  const handleClick = (e) => {
    console.log(e, "hello");
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    //Close dropdown

    console.log(option);
    setIsOpen(false);
    //what option did user click
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  // let content = 'Select...';
  // if (value){
  //     content = value.label;
  // }
  //console.log("value",value);

  return (
    <div>
      <div ref={divEl} onClick={handleClick}>
        {value?.label || "Select.."}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
