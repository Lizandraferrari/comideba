import Depoimento from "@/components/depoimento.jsx"
import depoimentos from "@/data/depoimentos.json"
import promocao from "@/assets/hamburguer.jpg"

export default function Home(){
    return (
        <>
            <section>
                <h1 className="titulo">
                    Promoção do mês!*
                </h1>
                <Depoimento
                    name={"Hamburguer de Berinjela"}
                    review={"R$19,90 local e delivery\nR$24,90 congelado 500g"}
                    date={"*Acompanhamento incluso para retirada."}
                    img={promocao}
                    />
            </section>

            <section className="sectionDepoimento">
                <h1 style={{color:"white"}}>
                    Depoimentos
                </h1>
                {depoimentos.map((item , i) => (
                    <Depoimento
                        key={i}
                        name={item.name}
                        review={item.review}
                        date={item.date}
                        img={item.img}
                        className={"estiloDepoimento"}
                    />
                ))
                }
            </section>
        </>
    )
}