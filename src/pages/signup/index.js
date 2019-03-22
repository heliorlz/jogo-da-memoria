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

  const $formLabel = formLabel.render();
  const $inputEmail = inputEmail.render();

  const $formWrapper = formWrapper.render($formLabel, $inputEmail);

  // inserting HTML content
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formWrapper);
})();
