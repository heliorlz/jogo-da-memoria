const game = function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $backButton = backButton.render("login");
  const $pointBar = pointBar.create($backButton);

  const $layerStart = layerStart.render("Go");

  const $memoryCardHead = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Icone de uma tag de abertura e fechamento em uma cabeça",
    dataIcone: "head"
  });

  const $memoryCardJS = createMemoryCard({
    src: "img/icon-cabeca.png",
    alt: "Icone de um livro de Javascript",
    dataIcone: "js"
  });

  const $memoryCardBug = createMemoryCard({
    src: "img/icon-bug.png",
    alt: "Icone de um inseto representando um bug no sistema",
    dataIcone: "bug"
  });

  const $memoryCardResponsive = createMemoryCard({
    src: "img/icon-responsivo.png",
    alt: "Icone de um monitor e um celular, representando responsividade",
    dataIcone: "responsive"
  });

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHead);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHead);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);

  $root.insertAdjacentHTML("beforeend", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $layerStart);
};
