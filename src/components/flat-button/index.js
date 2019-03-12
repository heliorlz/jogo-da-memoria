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
          width: 186px;
          height: 176px;
          text-transform: uppercase;
      }

      .-login {
          background-color: #eae6da; 
      }

      .-signup {
          background-color: #f25a70;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content, background) => {
    module._style();

    return `
      <button class="flat-button ${background}">${content}</button>          
    `;
  };

  return {
    render: module.render
  };
})();
