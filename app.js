/** menu inicial**/
var header = document.getElementById('header');
var paginas = document.getElementById('paginas');
var texto = document.getElementById('texto');
var showSidebar = false;

function toogleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        paginas.style.marginLeft = '-10vh';
        paginas.style.animationName = 'showSidebar';


    }
    else {
        paginas.style.marginLeft = '-100vh';
        paginas.style.animationName = '';
    }
}
/** menu inicial**/