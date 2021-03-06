const memoryCard = (function() {
  // padronizando funcoes privadas, acrescentando o underline (_matched) na frente do nome
  const module = {};
  
  module.create = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .memory-card {
          width: 120px;
          height: 120px;
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
          width: 75px;
          height: 75px;
          background-color: #d4d4d4;
          border-radius: 50%;
          position: absolute;
        }
        
       .memory-card .card > .icon {
          width: 80px;
          height: 80px;
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

    // por ser retornado atraves de json, a funcao handleclick deve ser agora memoryCard.handleClick, pois esta exposta desta forma para fora da funcao IIFE
    return ({ src, alt, dataIcone }) => ` 
      <div class="memory-card" data-icone="${dataIcone}" onclick="memoryCard.handleClick(this)"> 
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

  module.handleClick = $component => {
    if (!$component.classList.contains("-active")) {
      module._activeMemoryCard($component);
      module._checkForMatch();
    }
  };

  module._activeMemoryCard = $component => {
    if (store.qttActiveMemoryCard < 2) {
      $component.classList.add("-active");
    }
  };

  module._checkForMatch = () => {
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
        module._matched($activeMemoryCards);
        console.log("acertou");
        store.score += 10;
        // funcao retornada do module scoreSystem do point-bar
        pointBar.score();
      } else {
        console.log("errou");
        module._unmatched($activeMemoryCards);
      }
    }
  };

  // funcao que chama outra funcao, dentro da IIFE, nao precisa ser exposta
  module._matched = $activeMemoryCards => {
    $activeMemoryCards.forEach($memoryCard => {
      $memoryCard.classList.remove("-active");
      $memoryCard.classList.add("-score");
      store.qttActiveMemoryCard = 0;
    });
  };

  module._unmatched = $activeMemoryCards => {
    setTimeout(() => {
      $activeMemoryCards.forEach($memoryCard => {
        $memoryCard.classList.remove("-active");
        store.qttActiveMemoryCard = 0;
      });
    }, 1500);
  };

  return {
    create: module.create, 
    handleClick: module.handleClick
  };
})();
