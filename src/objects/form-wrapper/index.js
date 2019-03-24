const formWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-wrapper {
          display: flex;
          flex-direction: column;
          padding: 0 35px;
          margin-top: 50px;
          transform: translateY(-20%);
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = (...$children) => {
    module._style();

    return `<form class="form-wrapper">${$children.join("")}</form>`;
  };

  return {
    render: module.render
  };
})();
