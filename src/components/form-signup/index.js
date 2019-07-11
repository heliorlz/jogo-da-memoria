const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
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
    // rendering form signup
    const $labelFormUser = labelForm.render({ content: "Username" });
    const $inputFormUser = inputForm.render({ placeholder: "username" });

    const $labelFormEmail = labelForm.render({ content: "E-mail" });
    const $inputFormEmail = inputForm.render({
      type: "email",
      placeholder: "example@teste.com"
    });

    const $labelFormPassword = labelForm.render({ content: "Password" });
    const $inputFormPassword = inputForm.render({
      type: "password",
      placeholder: "******"
    });

    const $labelFormRepassword = labelForm.render({
      content: "Confirm password"
    });
    const $inputFormRepassword = inputForm.render({
      type: "password",
      placeholder: "******"
    });

    const $submitButton = submitButton.render({
      content: "Submit",
      path: "login"
    });

    return `
    ${$labelFormUser}
    ${$inputFormUser}
    ${$labelFormEmail}
    ${$inputFormEmail}
    ${$labelFormPassword}
    ${$inputFormPassword}
    ${$labelFormRepassword}
    ${$inputFormRepassword}
    ${$submitButton}
  `;
  };

  module.render = (...$children) => {
    module._style();

    return `<form class="form-signup" action="" method="POST ">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
