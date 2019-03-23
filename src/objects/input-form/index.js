const inputForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-form {
        background-color: transparent;
        border-bottom: 2px solid rgba(23, 25, 26, 0.2);
        padding: 12px 0;
        font-size: 18px;
        font-weight: bold;
        color: #3a4042;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (type, id) => {
    module._style();

    return `<input class="input-form" type="${type}" id="${id}">`;
  };

  return {
    render: module.render
  };
})();
