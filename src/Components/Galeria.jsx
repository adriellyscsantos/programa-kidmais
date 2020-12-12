import '../Styles/Components/galeria.css'

const Galeria = () => {
  
const Cards = ((() => {
    
    window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);
  
    function init(e)
    {
      if(document.querySelector(".cards"))
      {
        let cards = document.querySelector(".cards");
        cards.addEventListener('click', clicked, false);
        document.querySelectorAll(".cards .card")[1].click();
      }
    }
  
   
    function clicked(e)
    {
      let card = e.target;
      if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
    }
  
    
    function rearrange(card)
    {
      let cards = document.querySelectorAll(".cards .card");
      for(let n = 0; n < cards.length; n++)
      {
        cards[n].classList.remove("card--left");
        cards[n].classList.remove("card--center");
        cards[n].classList.remove("card--right");
      }
      cards[card].classList.add("card--center");
      if(card === 0)
      {
        cards[2].classList.add("card--left");
        cards[1].classList.add("card--right");
      }
      if(card === 1)
      {
        cards[0].classList.add("card--left");
        cards[2].classList.add("card--right");
      }
      if(card === 2)
      {
        cards[1].classList.add("card--left");
        cards[0].classList.add("card--right");
      }
    }
  
    return {
      init
    }
  })());
    return(
        <>
<div className="cards">
  <div className="card fill-orange" data-card="0">
   
   
  </div>
  <div className="card fill-blue" data-card="1">
   
    
  </div>
  <div className="card fill-green" data-card="2">
    
  
  </div>
</div>
        </>
    )
}

export default Galeria