document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('¡Gracias por contactarnos! Pronto responderemos tu mensaje.');
    this.reset();
});
