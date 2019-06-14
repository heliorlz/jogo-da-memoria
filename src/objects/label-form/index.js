const labelForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-form {
          color: #3a4042;
          opacity: 0.5;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `<label class="label-form">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
