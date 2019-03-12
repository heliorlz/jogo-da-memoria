(function() {
  const $root = document.querySelector("#root");

  const $flatButton = flatButton.render();

  //inserting HTML content
  $root.insertAdjacentHTML("afterbegin", $flatButton);
  $root.insertAdjacentHTML("beforeend", "<h1>WELCOME</h1>");
})();
