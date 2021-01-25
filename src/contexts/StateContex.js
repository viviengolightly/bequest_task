import React, { createContext, useReducer } from 'react';
import { stateReducer } from '../reducers/stateReducer';


export const StateContext = createContext();

const StateContextProvider = (props) => {
    const [checked, dispatch] = useReducer(stateReducer, false);
    return ( 
        <StateContext.Provider value={{checked, dispatch}}>
            {props.children}
        </StateContext.Provider>
     );
}
 
export default StateContextProvider;