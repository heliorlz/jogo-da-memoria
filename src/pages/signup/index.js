(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);

  //inserting HTML content
  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
