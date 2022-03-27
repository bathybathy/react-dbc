import { getSuggestedQuery } from '@testing-library/react';
import {useContext, useEffect} from 'react';
import { NameContext } from './context/NameContext'

function Name() {
    const {name, setName} = useContext(NameContext)
    const {user, getUser} = useContext(NameContext)
    
    return (
    <div>
        <h1>{name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
    )
}

export default Name;