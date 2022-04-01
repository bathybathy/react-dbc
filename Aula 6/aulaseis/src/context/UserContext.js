import { createContext } from "react";
import { useState } from "react";

import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import url from "../components/url";

export const UserContext = createContext();

function UserProvider({children}){

    const [pessoas, setPessoas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getPessoas = async () =>{

        try {
            const {data} = await url.get('/pessoa' )
            console.log(data);
            setPessoas(data);
            setLoading(false);
            
            
        } catch (error) {
            console.log("houve algum erro", error);
            setLoading(false);
            setError(true);
            
        }
    }

    

    

    
    return(
        <UserContext.Provider value ={{ getPessoas, pessoas, setLoading, loading, error, setError  }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;