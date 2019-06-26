const errorUser = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .error-user {
        margin-top: -18px;
        margin-bottom: 20px;
        color: red;
        display: none;
      }

      .error-user.-active {
        display: block;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();
    const $user = document.querySelector("#user");
    console.log($user);

    return `<p class="error-user">${content}</p>`;
  };

  return {
    render: module.render
  };
})();
