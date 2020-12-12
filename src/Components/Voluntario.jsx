import '../Styles/Components/voluntario.css'

const Voluntario = () =>{
    return(
        <>

        
<section className="sessao" id="formulario">
        <form className="formulario">
          <h4>SEJA VOLUNTÁRIO</h4>
          <div className="formulario-div">
          <label for="name" className="paragrafo-form">  Nome Completo: </label>
        </div>
          <input className="input" type="text" placeholder="Digite seu nome completo" required />
          <div className="formulario-div">
          <label for="name" className="paragrafo-form">  Data de Nascimento: </label>
        </div>
          <input className="input" type="date" required />
          <div className="formulario-div">
          <label for="name" className="paragrafo-form">  Telefone para contato: </label>
        </div>
          <input className="input" type="text" placeholder="081999999999" required />
          <div className="formulario-div">
         
          <label for="email" className="paragrafo-form">E-mail: </label>
        </div>
          <input className="input" type="email" placeholder="Digite seu email" required />
        <div className="formulario-div">
          <p className="paragrafo-form">O que te faz querer abraçar a causa?  </p>
          <textarea id="textarea" placeholder="Conte-nos sobre isso"></textarea>
        </div>
        <div class="formulario-div">


<label className="rotulo">
  <input name="caracteristica" type="checkbox" value="autocontrole"/>
Prometo me comprometer com o programa
</label>

        </div>
         


       

        <div className="formulario-div">

          <button className ="btn-forms" type="submit">Enviar</button>
          <button className ="btn-forms" type="reset">Reset</button>
        </div>
        </form>

      </section>

        </>
    )
}

export default Voluntario