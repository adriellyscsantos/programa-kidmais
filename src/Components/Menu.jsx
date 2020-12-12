import { Link } from "react-router-dom";
import "../Styles/Components/menu.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Menu = () => {
  function handleClick() {
    alert("Entre em contato conosco pelo email programakidmais@kidmais.com ");
  }

  return (
    <>
      <nav className="barra-navegacao2">
        <div className="img-nav"></div>
        <ul>
          <li>
            <AnchorLink className="anchor1" href="#inicio">
              INÍCIO
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor" href="#sobre">
              SOBRE NÓS
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor" href="#projetos">
              PROJETOS
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor" href="#contato">
              CONTATO
            </AnchorLink>
          </li>
          <button onClick={handleClick}>
            <Link className="link" to="#">
              DOE AGORA
            </Link>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
