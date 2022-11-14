const h1 = document.querySelector('h1')

function reactionClick(event) {
    event.target.innerHTML ='Nos meilleur Produits'
    event.target.style.color ='#0065c3'
}

// h1.addEventListener(txt => {
//     txt.addEventListener('click', reactionClick)
// })
h1.addEventListener('click', reactionClick)