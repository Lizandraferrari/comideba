import Produto from "../components/produto";
import hamburger from "@/assets/hamburguer.jpg"

export default function Carrinho(){
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className="abaProduto">
            <h1>
                Produtos no carrinho:
            </h1>
                <Produto
                    num={"1"+ "."}
                    img={hamburger}
                    name={"Hamburguer de Berinjela"}
                    size={"Pacote 500g"}
                    qtd={"1"}
                ></Produto>
            </div>

            <div className="pagamento">
                <h4>
                    Valor Total: R$44,99
                </h4>
                <p>
                    Forma de Pagamento:
                </p>
                <select>
                    <option value="credito">
                        Cartão de Crédito
                    </option>
                    <option value="pix">
                        Pix
                    </option>
                </select>
                <button>Finalizar</button> 
            </div>

        </div>
    )
}