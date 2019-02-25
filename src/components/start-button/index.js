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
            bottom: 120px;
            background-color: #2ed573;
            font-family: 'Comfortaa', sans-serif;
            cursor: pointer;
            box-shadow: 0px 4px 8px #3a4042;
            z-index: 3;
            overflow: hidden;
            max-height: 1000px;
            transition: max-height 3s linear;
        }

        .start-button.-hidden {
          max-height: 0;
          border: none;
          
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

  // atraves do parametro content, colocamos o conteudo do botao dinamicamente, recebido na page
  module.render = content => {
    module._style();

    return `
        <button class="start-button">
            <span>${content}</span>
        </button>
    `;
  };

  module.handleclick = $component => {
    $component.remove();
    document.querySelector(".transparency-layer").remove();
  };

  return {
    render: module.render,
    handleClick: module.handleclick
  };
})();
