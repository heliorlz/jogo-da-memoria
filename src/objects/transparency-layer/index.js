const transparencyLayer = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .transparency-layer {
            background-color: rgba(58, 64, 66, 0.8);
            position: absolute;
            height: 100vh;
            width: 100%;
            top: 0;
            z-index: 2;
        }
      `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
        <div class="transparency-layer">
        </div>
    `;
  };

  return {
    render: module.render
  };
})();
