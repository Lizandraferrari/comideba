import ProdutoCard from "../components/produtoCard";
import produtos from "@/data/produtos.json"

export default function TodosProdutos(){
    return(
        <>
        <h1 className="titulo">Todos os Produtos:</h1>
            <div className="quebraLinha">
                {
                    produtos.map((item , i) => (
                        <ProdutoCard
                            key = {i}
                            name = {item.name} 
                            img = {item.img}
                        ></ProdutoCard>
                    ))
                }

            </div>
        </>
    )
}