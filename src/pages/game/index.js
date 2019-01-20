
createMemoryCard(); // isolamos a funcao de criar um cartao no src/components/memory-card.js
createMemoryCardFront();
    
const $memoryCards = document.querySelectorAll('.memory-card');

$memoryCards.forEach(function($memoryCard) {
    $memoryCard.addEventListener('click', function(){
        console.log('memorycard cliked');
    });    
});









