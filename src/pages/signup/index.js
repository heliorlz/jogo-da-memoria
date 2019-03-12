(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render();
  const $flatButtonSignUp = flatButton.render();

  //inserting HTML content
  $root.insertAdjacentHTML("afterbegin", $flatButton);
  $root.insertAdjacentHTML("afterbegin", $flatButtonSignUp);
})();
