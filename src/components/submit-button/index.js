const submitButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .submit-button {
        height: 50px;
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 30px;
        border-radius: 24px;
        cursor: pointer;;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    window.location.hash = `#/${path}`;
    window.location.reload(true);
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();

    return `<button onclick="submitButton.handleClick(event,'${path}')" class="submit-button">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
