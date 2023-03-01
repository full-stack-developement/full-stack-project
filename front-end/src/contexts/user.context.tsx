import {
    Dispatch,
    ReactElement,
    SetStateAction,
    createContext,
    useState,
    useEffect,
  } from "react";
  import { IUserUpdate } from "../interfaces/user.interface"; 
  import { apiAnnouncement } from "../api";
  
  interface IUserContext {
    users: IUserUpdate[];
    setUsers: Dispatch<SetStateAction<IUserUpdate[]>>;
  }
  interface IUserProviderProps{
      children : ReactElement[] | ReactElement
  }
  
  export const UserContext = createContext({} as IUserContext);
  
  export function UserProvider(props: IUserProviderProps) {
    const [users, setUsers] = useState([] as IUserUpdate[]);
  
    return (
      <UserContext.Provider value={{ users, setUsers }}>
        {props.children}
      </UserContext.Provider>
    );
  }
  