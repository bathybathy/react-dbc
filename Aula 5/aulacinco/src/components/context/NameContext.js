import { createContext, useState } from "react";

export const NameContext = createContext();

function NameProvider( {children} ) {

    const [name, setName] = useState('')
    const [user, setUser] = useState([])

    async function getUser(){
        const {data} = await axios.get('api')
        setUser(data);
    }

    return (
        <NameContext.Provider value ={{ name, setName, user, getUser }}>
            {children}
        </NameContext.Provider>
    )
}

export default NameProvider