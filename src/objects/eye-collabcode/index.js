const eyeCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        background-image: url(/img/eye.png);
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 15px;
        text-indent: -9999px; /* sumir com o texto Mostrar Senha */
        cursor: pointer;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = () => {
    console.log("Aeee!!!");
  };

  module.render = () => {
    module._style();

    // importante criar como texto, pois a imagem do olho não representa de fato algo, para acessibilidade
    return `<label for="password" class="eye-collabcode" onclick="eyeCollabCode.handleClick()">Mostrar Senha</label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
