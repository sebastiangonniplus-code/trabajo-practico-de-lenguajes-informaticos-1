const modo_oscuro = document.getElementById('boton-modo-oscuro');

modo_oscuro.addEventListener('click',()=>{
    document.body.classlist.toggle('dark-mode')
});