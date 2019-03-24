const submitButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .submit-button {
        padding: 15px 120px;
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 30px;
        border-radius: 24px;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `<button class="submit-button">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
