const startButton = (function() {
  const module = {};

  module.style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        #root {
            position: relative;
        }

        .start-button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            position: absolute;
            left: 50%;
            margin-left: -25px;
            bottom: 30px;
            background-color: #3a4042;
            font-family: 'Comfortaa', sans-serif;
            cursor: pointer;
        }

        .start-button > span {
            color: #fff;
            font-weight: bold;
            line-height: 50px;
            font-size: 14px;
        }
      `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module.style();

    return `
        <button class="start-button">
            <span>Go</span>
        </button>
    `;
  };

  return {
    create: module.create
  };
})();
