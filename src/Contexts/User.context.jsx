import { createContext,useState } from "react";

export const UsersContext = createContext({
  currentUser: null,
  setcurrentUser : () => null,
});

export const UserProvider = ({children}) => {
  const [currentUser,setcurrentUser] = useState(null);
  const value = { currentUser,setcurrentUser };
  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}