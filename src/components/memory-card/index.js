// const numberCards = 9; /* numero de cards - o card front */

// JSON Javascript Object Notation
// utilizando object destructuring na function, passando diretamente como parametro
const createMemoryCard = ({ nameClass, src, alt }) => {
    const $head = document.querySelector('head');
    const $style = document.createElement('style');

    $style.textContent = `
    .memory-card {
        width: 130px;
        height: 130px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #f25a70;
        position: relative;
        margin-bottom: 15px;
        cursor: pointer;
      }
      
      .memory-card.-front {
        background-color: #fff;
      }
      
      .memory-card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
      }
      
      .memory-card > .icon {
        width: 100px;
        height: 100px;
      }
      
      .memory-card.-front > .icon {
        position: absolute;
        transform: translateY(-12px);
      }
    `
    $head.insertBefore($style, null);
    
    return ` 
    <article class="memory-card ${nameClass}">
        <img 
            src="${src}" 
            alt="${alt}" 
            class="icon"
            onclick="handleClick()"
        />
    </article>
    `;
}
const handleClick = () => console.log("foi");

// for (i = 0; i < numberCards; i++) {
//     const $memoryCard = document.createElement('article');
//     $memoryCard.classList.add('memory-card');
//     $wrapCards.insertBefore($memoryCard, null); /* tem que ser $wrapCards ao inrateves de root para ele embrulhar os elementos */
//     $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
// }
