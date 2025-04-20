export default function ProdutoCarrinho(produto){
    return (
        <>
            <div className="produto">
                <p>
                    {produto.num}
                </p>
                <img src = {produto.img}></img>
                <div className="produtoInfo">
                    <h4>
                        {produto.name}
                    </h4>
                    <ul>
                        <li>
                            {produto.size}
                        </li>
                        <li>
                            Quantidade: {produto.qtd}
                        </li>
                    </ul>
                    <div>
                        <p>
                            Opção de Retirada:
                        </p>
                        <select>
                            <option value="delivery">
                                Delivery
                            </option>
                            <option value="local">
                                Local
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}