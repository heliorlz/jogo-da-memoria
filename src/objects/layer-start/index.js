const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $startButton = $component.querySelector(".start-button");
    const $transparencyLayer = $component.querySelector(".transparency-layer");

    $startButton.classList.add("-disable");
    $transparencyLayer.classList.add("-disable");
  };

  module.handleTransitionEnd = $component => {
    if ($component.classList.contains("transparency-layer")) {
      $component.remove();
    }
  };

  module.render = content => {
    const $transparencyLayer = transparencyLayer.render();
    const $startButton = startButton.render(content);

    return `
        <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(this)">
            ${$transparencyLayer}
            ${$startButton}
        </div>
      `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
