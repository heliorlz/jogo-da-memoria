const eyeCollabCode = (function() {
  const module = {};

  module._style = () => {};

  module.render = () => {
    // importante criar como texto, pois a imagem do olho não representa de fato algo, para acessibilidade
    return `<label>Mostrar Senha</label>`;
  };

  return {
    render: module.render
  };
})();
