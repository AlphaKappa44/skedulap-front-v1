import { createContext } from "react";

export const userContext = createContext({
  user: {
    email: "popo@",
    password: "TotoQuiSaoule",
    first_name: "quiDonc",
    last_name: "CéQuiça",
  },
  setUser: () => {}
});

export default userContext;
