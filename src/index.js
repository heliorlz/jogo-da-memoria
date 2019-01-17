const $root = document.querySelector('#root');
const $wrapCards = document.createElement('section');

const $memoryCardFront = document.createElement('article');

const numberCards = 9; /* numero de cards - o card front */
const $iconCollab = 
    `<img 
        src="img/icon-collabcode.png" 
        alt="Gueio, mascote da CollabCode" 
        class="icon"
    />`;
    

const $iconJS = 
    `<img 
        src="img/icon-js.png" 
        alt="Icone do livro de Javascript" 
        class="icon"
    />`

$wrapCards.classList.add('wrap-cards');
$root.insertBefore($wrapCards, null);


for (i = 0; i < numberCards; i++) {
    const $memoryCard = document.createElement('article');
    $memoryCard.classList.add('memory-card');
    $wrapCards.insertBefore($memoryCard, null); /* tem que ser $wrapCards ao inrateves de root para ele embrulhar os elementos */
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);    
}  

$memoryCardFront.classList.add('memory-card');
$memoryCardFront.classList.add('-front');
$wrapCards.insertBefore($memoryCardFront, null);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);


