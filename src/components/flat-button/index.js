const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      body {
          display: block;
      }    

      .flat-button {
          background-color: #eae6da;
          color: #fffcee;
          font-size: 24px;
          font-weight: bold;
          border: none;
          width: 186px;
          height: 176px;
          text-transform: uppercase;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <button class="flat-button">Log in</button>          
    `;
  };

  return {
    render: module.render
  };
})();
