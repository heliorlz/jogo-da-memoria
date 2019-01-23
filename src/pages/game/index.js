const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(); // isolamos a funcao de criar um cartao no src/components/memory-card.js
const $memoryCardFront = createMemoryCard('-front');

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard); // inseri um texto em formato html
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCardFront);

$root.insertAdjacentElement('beforeend', $cardsWrapper); // beforeend inseri o elemento no final











