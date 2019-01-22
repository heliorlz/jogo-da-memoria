// const numberCards = 9; /* numero de cards - o card front */

const createMemoryCard = () =>  {
    const $memoryCard = `
        <article class="memory-card" onclick="handleClick()">
            <img 
                src="img/icon-collabcode.png" 
                alt="Gueio, mascote da CollabCode" 
                class="icon"
            />
        </article>
    `;
    
    return $memoryCard;
}

const handleClick = () => {
    const $memoryCards = document.querySelectorAll('.memory-card');

    $memoryCards.forEach(function($memoryCard){
        $memoryCard.onclick = () => {
            $memoryCard.classList.toggle('-front');
        };
    })
}

// const $memoryCards = document.querySelectorAll('.memory-card');
// $memoryCards.forEach(function($memoryCard) {
//     $memoryCard.addEventListener('click', function(){
//         console.log('memorycard cliked');
//     });    
// });

// const $iconCollab = 
//         `<img 
//             src="img/icon-collabcode.png" 
//             alt="Gueio, mascote da CollabCode" 
//             class="icon"
//         />`;

// for (i = 0; i < numberCards; i++) {
//     const $memoryCard = document.createElement('article');
//     $memoryCard.classList.add('memory-card');
//     $wrapCards.insertBefore($memoryCard, null); /* tem que ser $wrapCards ao inrateves de root para ele embrulhar os elementos */
//     $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);    
// }

// const $memoryCardFront = document.createElement('article');

// const $iconJS = 
//     `<img 
//         src="img/icon-js.png" 
//         alt="Icone do livro de Javascript" 
//         class="icon"
//     />`;

// $memoryCardFront.classList.add('memory-card');
// $memoryCardFront.classList.add('-front');
// $wrapCards.insertBefore($memoryCardFront, null);
// $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);