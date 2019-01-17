const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $memoryCardFront = document.createElement('article');

const $iconCollab = 
    `<img 
        src="img/icon-collabcode.png" 
        alt="Gueio, mascote da CollabCode" 
        class="icon"
    />`; // transformamos a tag img em string 
    //plus: para podermos quebrar e organizar melhor, usamos templatestring(as aspas)

const $iconJS = 
    `<img 
        src="img/icon-js.png" 
        alt="Icone do livro de Javascript" 
        class="icon"
    />`

$memoryCard.classList.add('memory-card');
$root.insertBefore($memoryCard, null); // como não temos nenhuma tag antes do article, devemos colocar null
// $memoryCard.innerHTML = $icon; 
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab); // pegando o caminho do icon e adicionando como html ao memorycard
// insertAdjacentHTML inseri HTML dinamicamente em nosso documento, pegando como parametros a posição e a string a ser inserida

$memoryCardFront.classList.add('memory-card');
$memoryCardFront.classList.add('-front');
$root.insertBefore($memoryCardFront, null);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);


