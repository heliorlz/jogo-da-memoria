const labelForm = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-form {
          color: #3a4042;
          opacity: 0.5;
          margin-bottom: 10px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ content, forLabel = "" }) => {
    module._style();

    return `<label for="${forLabel}" class="label-form">${content}</label>`;
  };

  return {
    render: module.render
  };
})();
