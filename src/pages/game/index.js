const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const bookJS = {
    nameClass: '-front',
    src: 'img/icon-js.png',
    alt: 'Icone de um livro de Javascript'
};

// const cards = {
//   headCard: [
//     "img/icon-cabeca.png",
//     "Icone de uma tag de abertura e fechamento em uma cabeça",
//     "-front"
//   ],

//   jsCard: ["img/icon-js.png", "Icone de um livro de Javascript", "-front"],

//   bugCard: [
//     "img/icon-bug.png",
//     "Icone de um inseto representando um bug no sistema",
//     "-front"
//   ],

//   responsiveCard: [
//     "img/icon-responsivo.png",
//     "Icone de um monitor e um celular, representando responsividade",
//     "-front"
//   ]
// };

// const $memoryCardHead = createMemoryCard(...cards.headCard);

const $memoryCardJS = createMemoryCard(bookJS);

// const $memoryCardBug = createMemoryCard(...cards.bugCard);

// const $memoryCardResponsive = createMemoryCard(...cards.responsiveCard);

// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHead);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardHead);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
