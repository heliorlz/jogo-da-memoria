const $root = document.querySelector('#root');
const $memoryCardHeads = document.createElement('article');
const $memoryCardTails = document.createElement('article');
const $iconHeads = 
    `<img 
        src="img/icon-collabcode.png" 
        alt="Gueio, mascote da CollabCode" 
        class="icon"
    />`; // transformamos a tag img em string 
    //plus: para podermos quebrar e organizar melhor, usamos templatestring(as aspas)
const $iconTails = 
    `<img
    src="img/icon-js.png"
    alt="Gueio, mascote da CollabCode"
    class="icon -js"
    />`;

$memoryCardHeads.classList.add('memory-card');
$memoryCardTails.classList.add('-tails');

// $memoryCardHeads.innerHTML = $icon; 

$root.insertBefore($memoryCardHeads, null); // como não temos nenhuma tag antes do article, devemos colocar null
$memoryCardHeads.insertAdjacentHTML("afterbegin", $iconHeads); // pegando o caminho do icon e adicionando como html ao memorycard
// insertAdjacentHTML inseri HTML dinamicamente em nosso documento, pegando como parametros a posição e a string a ser inserida
$root.insertBefore($memoryCardTails, null);
$memoryCardTails.insertAdjacentHTML("afterbegin", $iconTails);