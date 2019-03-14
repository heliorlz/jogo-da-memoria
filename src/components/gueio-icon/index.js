const gueioIcon = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .gueio-icon {
          width: 171px;
          height: 175px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `<img class="gueio-icon" src="img/icon-collabcode.png" alt="Mascote collabcode">`;
  };

  return {
    render: module.render
  };
})();
