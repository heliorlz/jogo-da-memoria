// const numberCards = 9; /* numero de cards - o card front */

// JSON Javascript Object Notation
const createMemoryCard = card => ` 
    <article class="memory-card ${card.nameClass}">
        <img 
            src="${card.src}" 
            alt="${card.alt}" 
            class="icon"
            onclick="handleClick()"
        />
    </article>
    `;

const handleClick = () => console.log('foi');

// for (i = 0; i < numberCards; i++) {
//     const $memoryCard = document.createElement('article');
//     $memoryCard.classList.add('memory-card');
//     $wrapCards.insertBefore($memoryCard, null); /* tem que ser $wrapCards ao inrateves de root para ele embrulhar os elementos */
//     $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
// }
