const formLabel = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-label {
          margin-bottom: 10px;
          color: #3a4042;
          opacity: 0.5;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `<label class="form-label" for="Email">E-mail</label>`;
  };

  return {
    render: module.render
  };
})();
