function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 10px;
    width: 100vw;
  }

  .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }
  `;

  $head.insertAdjacentElement("afterbegin", $style);

  $cardsWrapper.addEventListener("click", () => {
    store.qttActiveMemoryCard = $cardsWrapper.querySelectorAll(
      ".memory-card.-active"
    ).length;
  });

  return $cardsWrapper;
}
