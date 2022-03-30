import { Link } from "react-router-dom"

function Lista ( {path, text}  ) {

    return(
        <>
            <li>
                <Link to={path}><p>{text}</p></Link>
            </li>
        </>
    )
}

export default Lista