import Depoimento from "../components/depoimento"
import produtos from "../data/produtos.json"

export default function Destaques(){
    const fotoAbobora= produtos[2].img
    const nomeAbobora = produtos[2].name
    return (
        <>
            <main>
                <section>
                    <h1 className="titulo">
                        Mais vendido do mês!
                    </h1>
                    <Depoimento 
                        className={"miniImg"}
                        img={fotoAbobora}
                        name={nomeAbobora}
                        review={"Produto mais vendido do mês de abril\nVenha consumir em nosso salão ou peça delivery!*"}
                        date={"* Produto sujeito a disponibilidade do dia, podendo mudar sem aviso prévio"}
                    />
            </section>
            </main>
        </>
    )
}