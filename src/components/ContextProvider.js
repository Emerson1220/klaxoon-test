import { createContext, useState,useEffect,useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import {saveState,loadState} from "../utils/localStorageManager"
export const Context = createContext();

function Contextprovider({ children }) {
    const [bookMarks, setBookMarks] = useState([])

    const isInitialMount = useRef(true);

useEffect(() => {
  if (isInitialMount.current) {
     const data = loadState();
     if(data) setBookMarks(data);
     isInitialMount.current = false;
  } else {
    saveState(bookMarks);
  }
},[bookMarks]);


    return <Context.Provider value={[bookMarks, actions(setBookMarks)]}>
        {children}
    </Context.Provider>
}

export default Contextprovider;




const actions = (modifier) => {
    function append(data) {
        modifier(_ => [..._, { ...data, id: uuidv4() }])
    }
    function prepend(data) {
        modifier(_ => [{ id: uuidv4(), ...data }, ..._])
    }
    function remove(id) {
        modifier(_ => {
            return _.filter(el => el.id !== id)
        })
    }
    function modify(id, newData) {
        modifier( _ => {
            for (let index = 0; index < _.length; index++) {
                const element = _[index];
                if(element.id === id) {
                    _[index] = newData ;
                    break ;
                }
            }
            return [..._] ;
        });
        
            

    }
    return {
        append,
        prepend,
        remove,
        modify
    }

}