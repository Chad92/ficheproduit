const h1 = document.querySelector('.clc')

function reactionHover(event) {
 h1.classList.toggle('omg')
}

h1.addEventListener('mouseover', reactionHover)

const a = document.querySelector('a')

a.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseover donc mon bouton devient rouge
    event.target.style.color = "red";
  // je reset ma fonction apres 500ms, le bouton redevient noir
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false)

const h2 = document.querySelector('.pepsi')

h2.addEventListener('mouseover', function(event3) {
    // j ajoute du HTML a mon h2 lors du mouseover 
    event3.target.innerHTML = "Pepsi" + ' Sodas '
    // je change la couleur du h2 en rouge lors du hover
    event3.target.style.color ='red';})

