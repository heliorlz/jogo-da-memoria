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

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    $input.setAttribute("type", "text");
  };

  module.render = ({ attrFor = "" }) => {
    module._style();

    return `<label for="${attrFor}" class="eye-collabcode" onclick="eyeCollabCode.handleClick.bind(this)()">Mostrar Senha</label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
