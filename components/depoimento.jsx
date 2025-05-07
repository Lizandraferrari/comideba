export default function Depoimento(depoimentos){
    return (
        <article className={depoimentos.className + " depoimento" }>
            <img src={depoimentos.img}></img>
            <div className=" depoimentoTxt">
                <h3>
                    {depoimentos.name}
                </h3>
                <p>
                    {depoimentos.review}
                </p>
                <h6>
                    {depoimentos.date}
                </h6>
            </div>
        </article>
    )
}