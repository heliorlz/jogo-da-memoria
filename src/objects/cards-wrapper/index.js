function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector('head'); // pegando a tag head
  const $style = document.createElement('style'); // criando a tag style

  $style.textContent = `
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    width: 100vw;
  }

  .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }
  `
  $head.insertBefore($style, null); // adicionando a tag style e seu conteudo dentro da tag head

  return $cardsWrapper;
}
