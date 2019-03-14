function createLogosWrapper() {
  const $logosWrapper = document.createElement("section");
  $logosWrapper.classList.add("logos-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .logos-wrapper {
        width: 250px;
        background: #fff;
        margin-top: -75px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 150px 150px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
    }
  `;

  $head.insertBefore($style, null);

  return $logosWrapper;
}
