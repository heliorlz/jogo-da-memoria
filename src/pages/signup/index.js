(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render("Log in");
  const $flatButtonSignUp = flatButton.render("Sign up");

  //inserting HTML content
  $root.insertAdjacentHTML("afterbegin", $flatButton);
  $root.insertAdjacentHTML("afterbegin", $flatButtonSignUp);
})();
