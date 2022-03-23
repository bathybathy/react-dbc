function Eventos({val}) {

    function meuEvento() {
        console.log(`o valor é ${val}`)
    }
    return (
        <>
            <p>
             Clique para disparar um eento
            <button onClick={meuEvento}>Ativar</button>
            </p>
        </>
    )
}

export default Eventos;