var janelaMenu = document.getElementById('lista-menu');
var heroArea = document.getElementById('hero-area');
var valor = true;
window.onload = function(){
    heroArea.style.zIndex = '10';
}
function mostra() {
    if (valor == false) {
        heroArea.style.zIndex = '10';
        janelaMenu.style.display = 'none';
        valor = true; 
        
    }
    else {
        heroArea.style.zIndex = '-1';
        janelaMenu.style.display = 'block';
        valor = false;
        console.log("mosr");
        
    }
    
};

function contact(){
    alert('funciona');
}