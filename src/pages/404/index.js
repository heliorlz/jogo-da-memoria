const page404 = function() {
  const $root = document.querySelector("#root");

  const $error404 = error404.render();

  $root.insertAdjacentHTML("beforeend", $error404);
};
