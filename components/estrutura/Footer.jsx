import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <h4>Nossas Redes Sociais</h4>
        <section className="socialMedia">
          <a href="">
            <FaFacebook size={"4em"}/>
          </a>

          <a href="">
            <FaInstagram size={"4em"}/>
          </a>

          <a href="">
            <FaYoutube size={"4em"}/>
          </a>
        </section>
        <h6> © 2025 Comideba todos os direitos reservados</h6>
      </footer>
    </>
  )
}
