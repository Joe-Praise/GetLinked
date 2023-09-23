import { useState, createContext } from "react";

export let AppData = createContext();

function AppContext({ children }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  let data = {
    getMousePosition: [mousePosition, setMousePosition],
    getCursorVariant: [cursorVariant, setCursorVariant],
  };

  return <AppData.Provider value={data}>{children}</AppData.Provider>;
}
export default AppContext;
