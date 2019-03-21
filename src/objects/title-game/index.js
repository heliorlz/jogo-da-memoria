const titleGame = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .title-game {
        font-size: 24px;
        color: #f25a70;
        text-transform: uppercase;
        margin-top: 40px;
        letter-spacing: 0.6px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `<h1 class="title-game">${content}</h1>`;
  };

  return {
    render: module.render
  };
})();
