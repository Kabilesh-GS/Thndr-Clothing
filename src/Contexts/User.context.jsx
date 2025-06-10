import { createContext,useState } from "react";

export const UsersContext = createContext({
  currentUser: null,
  setcurrentUser : () => null,
});

export const UserProvider = ({childern}) => {
  const [currentUser,setcurrentUser] = useState(null);
  const value = { currentUser,setcurrentUser }
  return <UsersContext.Provider value={value}>{childern}</UsersContext.Provider>
}