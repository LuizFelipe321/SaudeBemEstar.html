let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;    
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

showSlides();  // Inicia o carrossel automaticamente