const page404 = function() {
  const $root = document.querySelector("#root");

  const $status404 = status404.render();

  $root.insertAdjacentHTML("beforeend", $status404);
};
