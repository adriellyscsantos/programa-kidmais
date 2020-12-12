import { Link } from 'react-router-dom'
import '../Styles/Components/footer.css'

const Footer = () =>{
    return(
<>
<footer className="rodape">
<p> Adrielly Silva 2020 @ Todos os direitos reservados</p>

<div className="redes-sociais">
    <div className="redes">
    <Link className="instagram" to={{ pathname: "https://www.instagram.com/sc.adrielly/" }} target="_blank">  
                <img src="https://www.flaticon.com/premium-icon/icons/svg/2626/2626270.svg" alt="" height='33px' width='30px'/>
                </Link>
                
                <Link className="linkedin" to={{ pathname: "https://www.linkedin.com/in/adrielly-silva-509532193" }} target="_blank">  
                <img src="https://www.flaticon.com/svg/static/icons/svg/145/145807.svg" alt="" height='30px' width='30px'/>
                </Link>
                <Link className="github" to={{ pathname: "https://github.com/adriellyscsantos" }} target="_blank">  
                <img src="https://www.flaticon.com/premium-icon/icons/svg/2956/2956194.svg" alt="" height='33px' width='33px'/>
                </Link>
    </div>
</div>
</footer>
</>
    )
}

export default Footer