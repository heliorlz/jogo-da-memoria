// const numberCards = 9; /* numero de cards - o card front */

// recebemos como parametro, o caminho das imagens atraves do src
// recebemos como parametro, a descrição do alt
const createMemoryCard = (src, alt, nameClass) => ` 
    <article class="memory-card ${nameClass}">
        <img 
            src="${src}" 
            alt="${alt}" 
            class="icon"
            onclick="handleClick()"
        />
    </article>
    `;

// for (i = 0; i < numberCards; i++) {
//     const $memoryCard = document.createElement('article');
//     $memoryCard.classList.add('memory-card');
//     $wrapCards.insertBefore($memoryCard, null); /* tem que ser $wrapCards ao inrateves de root para ele embrulhar os elementos */
//     $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
// }
