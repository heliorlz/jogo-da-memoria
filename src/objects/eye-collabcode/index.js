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
        opacity: 0.3;
        transition: opacity 200ms linear;
        margin-left: auto;
        transform: translateY(-350%);
      }
      .eye-collabcode.-active {
        opacity: 1;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute("type") === "text") {
      this.classList.remove("-active");
      $input.setAttribute("type", "password");
    } else {
      this.classList.add("-active");
      $input.setAttribute("type", "text");
    }

    // // logica acima utilizando if ternário
    // $input.getAttribute("type") === "text"
    //   ? $input.setAttribute("type", "password")
    //   : $input.setAttribute("type", "text");
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
