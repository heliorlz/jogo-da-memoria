const login = function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true, "login");
  const $signupButton = flatButton.render("Sign up", false, "signup");

  // const $avatarWrapper = createAvatarWrapper();
  const $titleGame = titleGame.render("Hello!");
  const $gueioIcon = gueioIcon.render();

  const $logoWrapper = logoWrapper.render($gueioIcon, $titleGame);

  const $formLogin = formLogin.render();

  // inserting HTML content
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formLogin);
};
