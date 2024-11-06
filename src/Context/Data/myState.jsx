import React, { useState } from "react";
import myContext from "./myContext";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  }

  return (
    <myContext.Provider value={{ mode, toggleMode, loading, setLoading }}>
      {props.children}
    </myContext.Provider>
  );
}

export default MyState;
