const pointBar = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .point-bar {
            background-color: #3a4042;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Comfortaa', sans-serif;
            padding: 0 20px;
        }
        
        .point-bar > .number {
            color: #fff;
            line-height: 40px;
            font-weight: bold;
            margin-right: calc(50% - 4.5px);
        }
        `;

    $head.insertBefore($style, null);
  };

  // sistema que recebe a pontuacao do nosso game e expoe na nossa point-bar
  module.scoreSystem = () => {
    const $showScore = document.querySelector(".number");
    $showScore.textContent = store.score;
  };

  module.create = $component => {
    module._style();

    return `
        <header class="point-bar">
          ${$component}  
          <span class="number">0</span>
        </header>
      `;
  };

  return {
    create: module.create,
    score: module.scoreSystem
  };
})();
