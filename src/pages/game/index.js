const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(); // isolamos a funcao de criar um cartao no src/components/memory-card.js

$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard); // inseri um texto em formato html
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);

$root.insertAdjacentElement('beforeend', $cardsWrapper); // beforeend inseri o elemento no final











