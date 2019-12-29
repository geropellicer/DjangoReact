import React,{useState, createContext} from 'react';

export const EditModeContext = createContext();

export const EditModeProvider = props => {
    const [editMode, setEditMode] = useState(false);

    return(
        <EditModeContext.Provider value={[editMode, setEditMode]}>
            {props.children}
        </EditModeContext.Provider>
    );
}

