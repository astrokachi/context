import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [state, setState] = useState(false)
    const [isToggle, setIsToggle] = useState(false);

    useEffect(() => {
        console.log(isToggle)
    }, [isToggle])

    useEffect(() => {
        // if(state){
            setUser({email: cookies.get('email'), name:cookies.get('name'), password: cookies.get('password')})
        // }
    }, [state])


    return <AuthContext.Provider value={{user, setState, isToggle, setIsToggle}} >{children}</AuthContext.Provider>
}

export default AuthProvider;
