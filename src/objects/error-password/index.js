const errorPassword = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .error-password {
        margin-top: -18px;
        margin-bottom: 20px;
        color: #fb9d7d;
        display: none;
      }
      .error-password.-active {
        display: block;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `<p class="error-password">${content}</p>`;
  };

  return {
    render: module.render
  };
})();
