// const numberCards = 9; /* numero de cards - o card front */

const createMemoryCard = nameClass => {
    let src = "img/icon-collabcode.png";

    if (nameClass === '-front') {
        src = "img/icon-js.png";
    }

    // nameClass: a funcao createMemoryCardFront recebe por parametro nameClass ('-front')
    // src: a variavel altera a imagem que o source ira receber
    return ` 
    <article class="memory-card ${nameClass}">
        <img 
            src="${src}" 
            alt="Gueio, mascote da CollabCode" 
            class="icon"
            onclick="handleClick()"
        />
    </article>
    `;
}; // retorna direramente utilizando arrow function, template string (a crase) deixa o comportamento do conteudo como se fosse na mesma linha


// const handleClick = () => {
//     const $memoryCards = document.querySelectorAll('.memory-card');

//     $memoryCards.forEach(function($memoryCard){
//         $memoryCard.onclick = () => {
//             $memoryCard.classList.toggle('-front');
//         };
//     })
// }

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