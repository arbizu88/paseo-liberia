import React, { createContext, useState } from "react";

const TimeoutContext = createContext();

const TimeoutProvider = (props) => {
  const [timeout, setTimeout] = useState();
  return (
    <TimeoutContext.Provider value={[timeout, setTimeout]}>
      {props.children}
    </TimeoutContext.Provider>
  );
};

export { TimeoutContext, TimeoutProvider };
