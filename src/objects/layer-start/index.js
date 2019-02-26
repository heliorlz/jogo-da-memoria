const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $startButton = $component.querySelector(".start-button");
    const $transparencyLayer = $component.querySelector(".transparency-layer");

    $startButton.classList.add("-disable");
    $transparencyLayer.classList.add("-disable");
  };

  module.render = content => {
    const $transparencyLayer = transparencyLayer.render();
    const $startButton = startButton.render(content);

    return `
        <div class="layer-start" onClick="layerStart.handleClick(this)">
            ${$transparencyLayer}
            ${$startButton}
        </div>
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
