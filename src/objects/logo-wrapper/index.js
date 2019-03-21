const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .logo-wrapper {
        width: 250px;
        background: #fff;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -25%);
        border-radius: 150px 150px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
    }
  `;

    $head.insertBefore($style, null);
  };

  // spread operator
  module.render = (...$children) => {

    module._style();

    return `<div class="logo-wrapper">${$children.join("")}</div>`;
  };

  return {
    render: module.render
  }
})();
