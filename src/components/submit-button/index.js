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
        text-align: center;
        margin-top: 30px;
        border-radius: 24px;
        cursor: pointer;;
      }
    `;
    $head.insertBefore($style, null);
  };

  module._checkEmail = () => {
    const $user = document.querySelector("#user");
    const userValue = $user.value;

    const $errorUser = document.querySelector(".error-user");

    if (userValue === "" || userValue === undefined || userValue === null) {
      $errorUser.classList.add("-active");
      $user.focus();
      return false;
    } else {
      $errorUser.classList.remove("-active");
      return true;
    }
  };

  module._checkPassword = () => {
    const $password = document.querySelector("#password");
    const passwordValue = $password.value;

    const $errorPassword = document.querySelector(".error-password");

    const $eyeCollabCode = document.querySelector(".eye-collabcode");

    if (passwordValue.length <= 0) {
      $errorPassword.classList.add("-active");
      $eyeCollabCode.style.margin = "-38px 0 0 auto";
      $password.focus();
      return false;
    } else {
      $errorPassword.classList.remove("-active");
      return true;
    }
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    module._checkEmail();
    module._checkPassword();

    if (module._checkEmail() && module._checkPassword()) {
      location.hash = `#/${path}`;
      location.reload(true);
    }
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();

    return `<button type="submit" onclick="submitButton.handleClick(event,'${path}')" class="submit-button">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
