import { useContext } from "react"
import {CountContext} from '../components/context/CountContext'

function Mirror (){
    const {count} = useContext(CountContext);
    return( <h1>Mirror: {count}</h1>)
}

export default Mirror