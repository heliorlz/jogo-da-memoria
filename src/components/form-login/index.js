const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-login {
            display: flex;
            flex-direction: column;
            padding: 0 35px;
            margin-top: 50px;
            transform: translateY(-20%);
        }
      `;
    $head.insertBefore($style, null);
  };

  module._children = () => {
    // rendering form login
    const $labelFormUser = labelForm.render("Username or e-mail");
    const $inputFormUser = inputForm.render();

    const $labelFormPassword = labelForm.render("Password");
    const $inputFormPassword = inputForm.render({
      type: "password",
      placeholder: "******"
    });

    const $submitButton = submitButton.render("Login");

    return `
      ${$labelFormUser}
      ${$inputFormUser}
  
      ${$labelFormPassword}
      ${$inputFormPassword}
  
      ${$submitButton}
    `;
  };

  module.render = (...$children) => {
    module._style();

    return `<form class="form-login" action="" method="POST ">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
