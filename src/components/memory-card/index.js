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

      .memory-card.-active .card,
      .memory-card.-score .card {
        display: none;
      }

      .memory-card.-active .card.-front,
      .memory-card.-score .card.-front {
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

  return ({ src, alt, dataIcone }) => ` 
    <div class="memory-card" data-icone="${dataIcone}" onclick="cardActs.handleClick(this)">
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

const cardActs = (function() { // me falhou entender o porquê de cardActs.handleClick na inserção do HTML acima, seguindo a live
  return {
    handleClick: function($component) {
      if (!$component.classList.contains("-active")) {
        activeMemoryCard($component);
        checkForMatch();
      }
    }
  };

  function activeMemoryCard($component) {
    if (store.qttActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
  }

  function checkForMatch() {
    if (store.qttActiveMemoryCard === 1) {
      const $activeMemoryCards = document.querySelectorAll(
        ".memory-card.-active"
      );

      if (
        $activeMemoryCards[0]
          .querySelector(".-front .icon")
          .getAttribute("src") ===
        $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        matched($activeMemoryCards);
        console.log("acertou");
        store.score += 10;
        console.log(`${store.score} pontos`);
      } else {
        console.log("errou");
        unmatched($activeMemoryCards);
      }
    }
  }

  function matched($activeMemoryCards) {
    $activeMemoryCards.forEach($memoryCard => {
      $memoryCard.classList.remove("-active");
      $memoryCard.classList.add("-score");
      store.qttActiveMemoryCard = 0;
    });
  }

  function unmatched($activeMemoryCards) {
    setTimeout(() => {
      $activeMemoryCards.forEach($memoryCard => {
        $memoryCard.classList.remove("-active");
        store.qttActiveMemoryCard = 0;
      });
    }, 1500);
  }
})();
