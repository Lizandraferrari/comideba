import { Outlet} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Outlet></Outlet>      
      </main>
      <Footer></Footer>
    </div>
  )
}