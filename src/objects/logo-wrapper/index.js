const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .logo-wrapper {
        width: 250px;
        background: #fff;
        margin: 0 auto;
        transform: translateY(-25%);
        border-radius: 150px 150px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
        margin-bottom: 50px;
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
  };
})();
