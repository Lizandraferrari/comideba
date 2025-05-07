export default function ProdutoCard (produto){
    return (
        <>
            <div className="produto"  style={{flexDirection:"column" , textAlign:"center"}}>
                <h4>
                    {produto.name}
                </h4>
                <div style={{display:"flex"}}>
                    <img src ={produto.img} style={{alignSelf:"start"}}></img>
                    <div className="produtoInfo">
                        <label style={{marginTop:"2em"}}>
                            Tamanho
                        </label>
                        <select>
                            <option>Pacote 500g</option>
                            <option>Refeição no Local</option>
                            <option>Pacote 1kg</option>
                        </select>
                        <button>Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </>
    )
}