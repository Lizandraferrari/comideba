import { TiShoppingCart } from "react-icons/ti";
import logo from "../../assets/comideba.png"

export default function Nav() {
  return (
    <>
      <nav>
        <div>
          <a href="/">
            <img src={logo} style={{width:"15%"}}></img>
          </a>
        </div>
        <ul>
          <li>
            <a href="">Destaques</a>
          </li>

          <li>
            <a href="">Blog</a>
          </li>

          <li>
            <a href="">Todos Produtos</a>
          </li>

          <li>
            <a href="/carrinho">
              Carrinho
              <TiShoppingCart />
              </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
