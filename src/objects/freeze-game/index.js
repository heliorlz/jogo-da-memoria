const freezeGame = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .freeze-game {
            background-color: white;
            opacity: 0.8;
            position: absolute;
            height: calc(100% + 25px);
            width: 100%;
            z-index: 2;
        }
      `;
    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();

    return `
        <section class="freeze-game">
        </section>
    `;
  };

  return {
    create: module.create
  };
})();
