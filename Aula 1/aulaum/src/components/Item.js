function Item({marca, lancamento, aumentarTamanho}){

    return(<li>{marca} - {lancamento} <h1>{aumentarTamanho(10, 20)}</h1></li>);
}

export default Item;