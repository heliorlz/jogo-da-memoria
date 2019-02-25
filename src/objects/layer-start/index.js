const layerStart = (function() {
  const module = {};

  module.handleClick = $component => $component.remove();

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
