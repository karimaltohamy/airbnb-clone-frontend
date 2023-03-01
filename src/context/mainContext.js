import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext({});

const MainProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, [user]);

  return (
    <mainContext.Provider value={{ user, setUser, ready }}>
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
