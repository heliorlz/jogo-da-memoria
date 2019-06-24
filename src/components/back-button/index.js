const backButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .back-button {
      padding: 5px 10px;
      
      border-radius: 10px;
      
      cursor: pointer;

      font-weight: bold;
      font-size: 15px;

      background-color: #fffcee;
    }
    `;

    $head.insertAdjacentElement("afterbegin", $style);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = (path = "") => {
    module._style();

    return `<button onclick="backButton.handleClick('${path}')"" class="back-button">Back</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
