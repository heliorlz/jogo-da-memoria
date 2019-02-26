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
          bottom: 50px;
          background-color: #2ed573;
          font-family: 'Comfortaa', sans-serif;
          cursor: pointer;
          box-shadow: 0px 4px 8px #3a4042;
          color: #fff;
          font-weight: bold;
          line-height: 70px;
          font-size: 12px;
          text-transform: uppercase;
          transition: all 300ms linear; 
        }

        .start-button.-disable {
          transform: scale(2.5);
          transform-origin: 80%;
          opacity: 0;
        }
      `;
    $head.insertBefore($style, null);
  };

  // atraves do parametro content, colocamos o conteudo do botao dinamicamente, recebido na page
  module.render = content => {
    module._style();

    return `
        <button class="start-button">
          ${content}
        </button>
    `;
  };

  return {
    render: module.render
  };
})();
