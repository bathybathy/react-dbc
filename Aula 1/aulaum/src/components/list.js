import Item from "./Item";

function List() {
    function aumentarTamanho(n1, n2){
        return (n1 + n2)
    }
    return (
        <>
        <h2>MinhaLista</h2>
        <ul>
           <Item marca='Ferrari' lancamento={1920} aumentarTamanho={aumentarTamanho}/>
           <Item marca='VW' lancamento={1930} aumentarTamanho={aumentarTamanho}/>
           <Item marca='Renault' lancamento={1940} aumentarTamanho={aumentarTamanho}/>
           <Item marca='Fiat'lancamento={1980} aumentarTamanho={aumentarTamanho}/>
        </ul>
        </>
    )

}

export default List;
