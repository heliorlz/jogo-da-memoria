const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCardHead = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-js.png",
  alt: "Icone de uma tag de abertura e fechamento em uma cabeça"
});

const $memoryCardJS = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-cabeca.png",
  alt: "Icone de um livro de Javascript"
});

const $memoryCardBug = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-bug.png",
  alt: "Icone de um inseto representando um bug no sistema"
});

const $memoryCardResponsive = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-responsivo.png",
  alt: "Icone de um monitor e um celular, representando responsividade"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHead);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHead);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
