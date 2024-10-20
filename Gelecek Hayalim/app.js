const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
    menuOverlay.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    menuOverlay.style.display = "none";
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
});

// Menü listesine tıklama
document.querySelectorAll('.menu-list a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        menuOverlay.style.display = "none";
        menuBtn.style.display = "flex";
        closeBtn.style.display = "none"; 
    });
});

let zoomedImageVisible = {};

function showZoomedImage(previewId) {
    const zoomPreview = document.getElementById(previewId);

    zoomPreview.style.display = 'block';
    zoomedImageVisible[previewId] = true;

    document.querySelector('.world-map').classList.add('blurred');

    console.log('Zoom preview showing for image: ', previewId);
}

function hideZoomedImage(previewId) {
    const zoomPreview = document.getElementById(previewId);
    if (!zoomedImageVisible[previewId]) {
        zoomPreview.style.display = 'none';
        console.log('Zoom preview hidden ', previewId);

        document.querySelector('.world-map').classList.remove('blurred');
    }
}

// Her resme tıklayınca ilgili modali açacak
document.getElementById('zoomed-na').addEventListener('click', function() {
    openModal('modal-na');
});

document.getElementById('zoomed-sa').addEventListener('click', function() {
    openModal('modal-sa');
});

document.getElementById('zoomed-af').addEventListener('click', function() {
    openModal('modal-af');
});

document.getElementById('zoomed-av').addEventListener('click', function() {
    openModal('modal-av');
});

document.getElementById('zoomed-as').addEventListener('click', function() {
    openModal('modal-as');
});

document.getElementById('zoomed-o').addEventListener('click', function() {
    openModal('modal-o');
});

// Modal açma fonksiyonu
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';

    // Arka planı bulanıklaştır
    document.querySelector('.world-map').classList.add('blurred-background');
}

// Modal kapatma fonksiyonu
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';

    // Arka planın bulanıklığını kaldır
    document.querySelector('.world-map').classList.remove('blurred-background');
}


// Fare ikinci görüntüye geldiğinde de açık kalmasını sağla
document.querySelectorAll('.zoom-preview').forEach(preview => {
    preview.addEventListener('mouseenter', function() {
        const previewId = preview.id;
        zoomedImageVisible[previewId] = true;
    });

    preview.addEventListener('mouseleave', function() {
        const previewId = preview.id;
        zoomedImageVisible[previewId] = false;
        hideZoomedImage(previewId);
    });
});

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});



  
  




