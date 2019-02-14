const pointBar = (function() {
  const module = {};

  module.style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .point-bar {
            background-color: #3a4042;
            height: 40px;
            text-align: center;
            font-family: 'Comfortaa', sans-serif;
        }
        
        .point-bar > .number {
            color: #fff;
            line-height: 40px;
            font-weight: bold;
        }
        `;

    $head.insertBefore($style, null);
  };

  module.scoreSystem = () => {
      const $showScore = document.querySelector(".number");
      $showScore.textContent = store.score;
  }

  module.create = () => {
    module.style();

    return `
        <header class="point-bar">
            <span class="number">0</span>
        </header>
      `;
  };

  return {
    create: module.create,
    score: module.scoreSystem
  };
})();
