// const numberCards = 9; /* numero de cards - o card front */

// nameClass + if ternario, faz a troca da imagem dependendo se tiver o modificador -front ou não
const createMemoryCard = nameClass => ` 
    <article class="memory-card ${nameClass}">
        <img 
            src="${
              nameClass === "-front"
                ? "img/icon-js.png"
                : "img/icon-collabcode.png"
            }" 
            alt="${
              nameClass === "-front"
                ? "Icone livro de Javascript"
                : "Gueio, mascote da CollabCode"
            }" 
            class="icon"
            onclick="handleClick()"
        />
    </article>
    `;
// retorna direramente utilizando arrow function, template string (a crase) deixa o comportamento do conteudo como se fosse na mesma linha

// const handleClick = () => {
//     const $memoryCards = document.querySelectorAll('.memory-card');

//     $memoryCards.forEach(function($memoryCard){
//         $memoryCard.onclick = () => {
//             $memoryCard.classList.toggle('-front');
//         };
//     })
// }

// for (i = 0; i < numberCards; i++) {
//     const $memoryCard = document.createElement('article');
//     $memoryCard.classList.add('memory-card');
//     $wrapCards.insertBefore($memoryCard, null); /* tem que ser $wrapCards ao inrateves de root para ele embrulhar os elementos */
//     $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
// }
