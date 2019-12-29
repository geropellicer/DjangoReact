import React,{useState, createContext} from 'react';

export const RemoveModeContext = createContext();

export const RemoveModeProvider = props => {
    const [removeMode, setRemoveMode] = useState({mode: false, object: {}});

    return(
        <RemoveModeContext.Provider value={[removeMode, setRemoveMode]}>
            {props.children}
        </RemoveModeContext.Provider>
    );
}