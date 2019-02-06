// const numberCards = 9; /* numero de cards - o card front */

// JSON Javascript Object Notation
// utilizando object destructuring na function, passando diretamente como parametro
const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
      .memory-card {
        width: 130px;
        height: 130px;
        position: relative;
      }
  
      .memory-card .card {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #f25a70;
        position: relative;
        margin-bottom: 15px;
        cursor: pointer;
        position: absolute;
      }

      .memory-card.-active .card {
        display: none;
      }

      .memory-card.-active .card.-front {
        display: flex;
      }
      
     .memory-card .card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
      }
      
     .memory-card .card > .icon {
        width: 100px;
        height: 100px;
      }

     .memory-card .card.-front {
        background-color: #fff;
      }
        
     .memory-card .card.-front > .icon {
        position: absolute;
        transform: translateY(-12px);
      }


    `;
  $head.insertBefore($style, null);

  return ({ src, alt }) => ` 
    <div class="memory-card" onclick="handleClick(this)">
      <article class="card -front">
        <img 
            src="${src}" 
            alt="${alt}" 
            class="icon"
        />
      </article>
      <article class="card">
        <img 
          src="img/icon-collabcode.png" 
          alt="Mascote collabcode" 
          class="icon"
        />    
      </'article>
    </div>
    `;
};

let hasFlippedCard = false; 
let lockBoard = false; 
let firstCard, secondCard; 

const handleClick = $component => {
  if ( qttActiveMemoryCard < 2 ) {
    $component.classList.toggle('-active');
  }

  if ( qttActiveMemoryCard == 1 ) {
    setTimeout(() => {
      const $activeMemoryCards = document.querySelectorAll('.memory-card.-active');

      $activeMemoryCards.forEach($memoryCard => {
        $memoryCard.classList.remove('-active');
        qttActiveMemoryCard = 0; // necessita zerar para que seja reativado o processo de contagem assim que desvirar
      })
    }, 1500);
  }
  
} 
  
//   if ( lockBoard ) return;
//   $component.classList.add('-active');

//   if ( !hasFlippedCard ) {
//     hasFlippedCard = true;
//     firstCard = $component;
//     return;
//   }

//   secondCard = $component;
//   hasFlippedCard = false;

//   unflipCards();
// };


// function unflipCards() {
//   lockBoard = true;

//   if ( firstCard && secondCard ) {
//     setTimeout(() => {
//       firstCard.classList.remove('-active');
//       secondCard.classList.remove('-active');
//       lockBoard = false;
//     }, 2000);
//   }
// }




