(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  // const $avatarWrapper = createAvatarWrapper();
  const $titleGame = titleGame.render("Welcome!");
  const $gueioIcon = gueioIcon.render();

  const $logoWrapper = logoWrapper.render($gueioIcon, $titleGame);
  // inserting elements inside logos-wrapper
  // $avatarWrapper.insertAdjacentHTML("beforeend", $gueioIcon);
  // $avatarWrapper.insertAdjacentHTML("beforeend", $titleGame);

  // rendering form signup
  const $labelFormUser = labelForm.render("Username");
  const $inputFormUser = inputForm.render("text", "Username");
  const $labelFormEmail = labelForm.render("E-mail");
  const $inputFormEmail = inputForm.render("email", "Email");
  const $labelFormPassword = labelForm.render("Password");
  const $inputFormPassword = inputForm.render("password", "Password");
  const $labelFormRepassword = labelForm.render("Confirm password");
  const $inputFormRepassword = inputForm.render("password", "Password");
  const $submitButton = submitButton.render("Submit");
  const $formWrapper = formWrapper.render(
    $labelFormUser,
    $inputFormUser,
    $labelFormEmail,
    $inputFormEmail,
    $labelFormPassword,
    $inputFormPassword,
    $labelFormRepassword,
    $inputFormRepassword,
    $submitButton
  );

  

  // inserting HTML content
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formWrapper);
})();
