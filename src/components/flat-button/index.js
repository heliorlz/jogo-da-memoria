const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
          background-color: ${active ? "#f25a70" : "#eae6da"};
          color: ${active ? "#fff" : "#fffcee"};
          font-size: 24px;
          font-weight: bold;
          width: 50%;
          height: 176px;
          text-transform: uppercase;
      }

      .flat-button-${module._id} span {
        display: block;
        margin-top: -30px; 
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = (content = "", active = false, path = "") => {
    // module._id = module._id +1;
    module._id++;

    module._style(active);

    return `<button onclick="flatButton.handleClick('${path}')" class="flat-button-${
      module._id
    }"><span>${content}</span></button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
