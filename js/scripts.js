
let menu =  document.querySelector ('#menu');

let menu_bar =  document.querySelector ('#menu-bar');

   menu_bar.addEventListener ('click', function() {

		menu.classList.toggle('menu-toggle');

	})

/*--- Boton Leer mas ---*/

let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Leer Menos'
  }
  else {
    readMore_btn.innerHTML = 'Leer Más'
  }
}