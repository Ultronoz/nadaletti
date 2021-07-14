var janelaMenu = document.getElementById('lista-menu');
var valor = true;

function mostra() {
    if (valor == false) {
        janelaMenu.style.display = 'none';
        valor = true; 
    }
    else {
        janelaMenu.style.display = 'block';
        valor = false;
        console.log("mosr");
        
    }
    
};

