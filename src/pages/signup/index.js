(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  const $logosWrapper = createLogosWrapper();
  const $beginTitle = beginTitle.render("Welcome!");
  const $gueioIcon = gueioIcon.render();

  // inserting elements inside logos-wrapper
  $logosWrapper.insertAdjacentHTML("beforeend", $gueioIcon);
  $logosWrapper.insertAdjacentHTML("beforeend", $beginTitle);

  // inserting HTML content
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentElement("beforeend", $logosWrapper);
})();
