const inputEmail = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-email {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid rgba(23, 25, 26, 0.2);
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
        color: #3a4042;
      }

      input[type="email"] {
        font-family: "Comfortaa", sans-serif;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `<input class="input-email" type="email" id="Email">`;
  };

  return {
    render: module.render
  };
})();
