const linkCollab = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .link-collab {
        display: block;
        text-decoration: none;
        color: #3a4042;
        font-size: 14px;
        opacity: 0.7;
        margin-top: 20px;
        margin-bottom: 40px;
        text-align: right;    
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = ({ href, content }) => {
    module._style();

    return `<a class="link-collab" href="${href}">${content}</a> `;
  };

  return {
    render: module.render
  };
})();
