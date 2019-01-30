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
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #f25a70;
        position: relative;
        margin-bottom: 15px;
        cursor: pointer;
      }
      
      .memory-card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
      }
      
      .memory-card > .icon {
        width: 100px;
        height: 100px;
      }

      /* faz a troca, quando nao estiver com o modificador front, da primeira imagem com a segunda */
      .memory-card>.icon:first-of-type {
        display:none;
      }

      .memory-card>.icon:last-of-type {
        display:block;
      }

      .memory-card.-front {
        background-color: #fff;
      }

      /* faz a troca, quando estiver com o modificador front, da segunda imagem com a primeira */
      .memory-card.-front>.icon:first-of-type {
        display:block;
      }
      .memory-card.-front>.icon:last-of-type {
        display:none;
      }
        
      .memory-card.-front > .icon {
        position: absolute;
        transform: translateY(-12px);
      }


    `;
  $head.insertBefore($style, null);

  return ({ nameClass, src, alt }) => ` 
    <article class="memory-card ${nameClass}" onclick="handleClick()">
      <img 
          src="${src}" 
          alt="${alt}" 
          class="icon"
      />
      <!-- adicionar as duas imagens e fazer a troca utilizando o click + displays no css -->
      <img 
        src="img/icon-collabcode.png" 
        alt="Mascote collabcode" 
        class="icon"
      />    
    </article>
    `;
};
const handleClick = () => {
  const $memoryCards = document.querySelectorAll(".memory-card");

  $memoryCards.forEach(function($memoryCard) {
    $memoryCard.onclick = () => {
      $memoryCard.classList.toggle("-front");
    };
  });
};
