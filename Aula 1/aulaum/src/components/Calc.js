const Calc = ({n1, n2}) =>{
    const Somar = (n1, n2) =>{
        return (n1 + n2)
    }

    const Diminuir = (n1, n2) =>{
        return (n1 - n2)
    }
    
    return (
    <div>
        <h1>{Somar(n1, n2)}</h1>
        <h1>{Diminuir(n1, n2)}</h1>
    </div>);
    

}

export default Calc