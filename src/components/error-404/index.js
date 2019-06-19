const error404 = (function() {
  const module = {};

  module._style = () => {
    $head = document.querySelector("head");
    $style = document.createElement("style");

    $style.textContent = `
      body {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        text-align: center;
      } 
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `<h1>Error 404, Page Not Found!</h1>`;
  };

  return {
    render: module.render
  };
})();
