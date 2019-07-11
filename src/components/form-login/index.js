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
            transform: translateY(-20%);
        }
      `;
    $head.insertBefore($style, null);
  };

  module._children = () => {
    // rendering form login
    const $labelFormUser = labelForm.render({
      content: "Username or e-mail",
      forLabel: "user"
    });
    const $inputFormUser = inputForm.render({
      id: "user"
    });
    const $errorUser = errorUser.render("User is required");

    const $labelFormPassword = labelForm.render({
      content: "Password",
      forLabel: "password"
    });
    const $inputFormPassword = inputForm.render({
      id: "password",
      type: "password",
      placeholder: "8 digits"
    });
    const $eyeCollabCode = eyeCollabCode.render({ attrFor: "password" });
    const $errorPassword = errorPassword.render(
      "Password must be at least 8 characters"
    );

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forget password?"
    });

    const $submitButton = submitButton.render({
      content: "Login",
      path: "game"
    });

    return `
      ${$labelFormUser}
      ${$inputFormUser}
      ${$errorUser}
  
      ${$labelFormPassword}
      ${$inputFormPassword}
      ${$errorPassword}
      
      ${$eyeCollabCode}
  
      ${$linkCollab}
      ${$submitButton}
    `;
  };

  module.render = (...$children) => {
    module._style();

    return `<form class="form-login" action="" method="POST" novalidate>${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
