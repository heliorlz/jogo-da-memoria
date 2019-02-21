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
        <button class="start-button">
            <span>Start</span>
        </button>
    `;
  };

  return {
    create: module.create
  };
})();
