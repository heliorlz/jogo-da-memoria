(function() {
  const { hash } = window.location;

  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = page404;

  paths[hash] ? paths[hash]() : paths["#/404"]();

  // // caso true, mostra a page em questão, caso false, mostra a page 404
  // if (paths[hash]) {
  //   paths[hash]();
  // } else {
  //   paths["#/404"]();
  // }
})();
