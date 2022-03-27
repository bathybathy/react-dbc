import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';

// useEffect carrega uma vez depois de ter carregado a página completa. é bom para não puxar varias vezes o mesmo api por ex
function Inicial () {

    async function setup(){
        const {data} = await axios.get('https://api.github.com/users/bathybathy')
        console.log(data);
    }

    useEffect( () => {
        setup()
    }, []);
    
    return(<div><h1>Inicial</h1>
    
    </div>)
}

export default Inicial;