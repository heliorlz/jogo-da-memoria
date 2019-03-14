const beginTitle = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .begin-title {
        font-size: 24px;
        color: #f25a70;
        text-transform: uppercase;
        margin-top: 40px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `<h1 class="begin-title">${content}</h1>`;
  };

  return {
    render: module.render
  };
})();
