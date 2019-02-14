const pointBar = (function() {
  const module = {};

  module.style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .point-bar {
            background-color: #3a4042;
            height: 40px;
            text-align: center;
            font-family: 'Comfortaa', sans-serif;
        }
        
        .point-bar > .number {
            color: #fff;
            line-height: 40px;
            font-weight: bold;
        }
        `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module.style();

    return `
        <header class="point-bar">
            <span class="number">1</span>
        </header>
      `;
  };

  return {
    create: module.create
  };
})();
