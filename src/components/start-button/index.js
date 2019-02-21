const startButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .start-button {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 3px solid #fffcee;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -10px;
            background-color: #2ed573;
            font-family: 'Comfortaa', sans-serif;
            cursor: pointer;
            box-shadow: 0px 4px 8px #3a4042;
            z-index: 3;
        }

        .start-button.-hidden {
          display: none;
        }

        .start-button > span {
            color: #fff;
            font-weight: bold;
            line-height: 70px;
            font-size: 12px;
            text-transform: uppercase;
        }
      `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
        <button class="start-button" onclick="startButton.handleClick()">
            <span>Start</span>
        </button>
    `;
  };

  module.handleclick = () => {
    const $startButton = document.querySelector(".start-button");
    const $layer = document.querySelector(".freeze-game");

    if (!$startButton.classList.contains("-hidden")) {
      $layer.classList.add("-hidden");
      $startButton.classList.add("-hidden");
    }
  };

  return {
    create: module.create,
    handleClick: module.handleclick
  };
})();
