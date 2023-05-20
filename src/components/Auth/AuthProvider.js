import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [id, setID] = useState('');
    const [role, setRole] = useState('');

    return(
        <AuthContext.Provider value={{username, setUsername, id, setID, role, setRole}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;