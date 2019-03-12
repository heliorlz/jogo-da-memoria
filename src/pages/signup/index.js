(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render("Log in", "-login");
  const $flatButtonSignUp = flatButton.render("Sign up", "-signup");

  //inserting HTML content
  $root.insertAdjacentHTML("afterbegin", $flatButton);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
