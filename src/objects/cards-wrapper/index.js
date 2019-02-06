function createCardsWrapper() {
  let qttActiveMemoryCard = 0;
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector('head'); // pegando a tag head
  const $style = document.createElement('style'); // criando a tag style

  $style.textContent = `
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    width: 100vw;
  }

  .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }
  `
  $head.insertBefore($style, null); 

  $cardsWrapper.addEventListener('click', event => {
    const $origin = event.target;
    
    if( $origin.closest('.memory-card.-active') ) {
      qttActiveMemoryCard = qttActiveMemoryCard + 1;
    } else if ( $origin.closest('.memory-card') ) {
      qttActiveMemoryCard = qttActiveMemoryCard - 1;
    }

    console.log('qtd', qttActiveMemoryCard);

  })  

  return $cardsWrapper;
}
