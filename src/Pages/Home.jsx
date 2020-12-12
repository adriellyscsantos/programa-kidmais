
import Menu from "../Components/Menu";
import Header from "../Components/Header"
import Sobre from "../Components/Sobre"
import Projetos from "../Components/Projetos"
import Voluntario from "../Components/Voluntario"
import Galeria from "../Components/Galeria"
import Contato from "../Components/Contato"
import Footer from "../Components/Footer"
import '../Styles/global.css'

const Home = () => {
  return (
    <>
    <Menu />
    <Header />
    <Sobre />
    <Projetos />
    <Voluntario />
    <Galeria />
    <Contato />
    <Footer />

    </>
  );
};

export default Home;
