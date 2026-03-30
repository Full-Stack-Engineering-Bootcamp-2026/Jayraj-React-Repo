import { createContext, useState } from "react";

const SportContext = createContext();

export function SportProvider({ children }) {
  const [sport, setSport] = useState("Basketball");

  return (
    <SportContext.Provider value={{ sport, setSport }}>
      {children}
    </SportContext.Provider>
  );
}

export default SportContext;