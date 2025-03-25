document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true, 
    slidesPerView: 3,
    slidesPerGroup: 1, 
    spaceBetween: 10, 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    navigation: false, 
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Modal
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close");

  // Selecionando todas as imagens 
  const images = document.querySelectorAll('.carousel-image');

  // Abrir a imagem no modal
  images.forEach((image) => {
    image.addEventListener('click', function () {
      modal.style.display = "block";
      modalImg.src = this.src; 
    });
  });

  // Fechar o modal 
  closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
  });

  // Fechar o modal clicando fora da imagem
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
  // FAQ

document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    // Fecha todos os outros itens antes de abrir o selecionado
    document.querySelectorAll('.faq-item').forEach(faq => {
      if (faq !== item.parentNode) {
        faq.classList.remove('active');
      }
    });
    // Alterna o item clicado
    item.parentNode.classList.toggle('active');
  });
});
