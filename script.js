/**
 * Binderbubi Backyard Running - Script principal
 * Gestionează slider-ul de imagini și modalul (Lightbox) pentru toate paginile
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // 1. CONFIGURARE SLIDER (INDEX)
    // =========================================
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        if (slides.length === 0) return;
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slides[currentIndex].classList.add('active');
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
            resetTimer();
        });
        prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
            resetTimer();
        });
        startTimer();
    }

    function startTimer() {
        if (slides.length > 0) {
            slideInterval = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 5000);
        }
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // =========================================
    // 2. LOGICĂ LIGHTBOX (PENTRU INDEX ȘI AUTISM)
    // =========================================
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("caption");

    // Funcție comună pentru deschiderea imaginii
    function openImage(e) {
        if (e.target && e.target.tagName === 'IMG') {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt || "";
            document.body.style.overflow = "hidden"; // Blochează scroll-ul paginii
        }
    }

    // VERIFICARE 1: Slider-ul de pe prima pagină
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.addEventListener('click', openImage);
    }

    // VERIFICARE 2: Grila de pe pagina Autism 24H
    const runnersGrid = document.querySelector('.runners-grid');
    if (runnersGrid) {
        runnersGrid.addEventListener('click', openImage);
    }

    // --- LOGICĂ ÎNCHIDERE MODAL ---
    function closeModal() {
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Închidere la butonul X
    const closeBtn = document.querySelector(".close-modal");
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Închidere la click oriunde pe modal (fundal sau imagine)
    if (modal) {
        modal.addEventListener('click', closeModal);
    }

    // Închidere la tasta ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });



    // BATE PALMA
    const btn = document.getElementById('highFiveBtn');
    const display = document.getElementById('highFiveCount');
    const wrapper = document.getElementById('countWrapper');

    // URL-ul tău pentru incrementare (HIT)
    const hitURL = "https://api.counterapi.dev/v2/andrei-holergas-team-3535/batepalma/up";

    // 1. Verificăm DOAR local dacă a mai apăsat (fără cerere la server aici)
    const hasHighFived = localStorage.getItem('hasHighFived');

    if (hasHighFived === 'true') {
        // Dacă a apăsat deja, îi arătăm starea de "blocat" dar fără să știm numărul 
        // (sau poți lăsa așa până face cineva click, dar e mai bine să fie blocat)
        if (btn) {
            btn.innerText = "Te așteptăm la alergări!";
            btn.disabled = true;
            btn.style.background = "#222";
            btn.style.cursor = "default";
        }
    }

    // 2. Logica pentru Click
    if (btn && hasHighFived !== 'true') {
        btn.addEventListener('click', async function() {
            console.log("Click detectat pe buton!");

             // Efect vizual buton
                    btn.innerText = "👍";
                    btn.style.background = "#222";
                    btn.disabled = true; 
                    wrapper.style.opacity = "1";

            try {
                const response = await fetch(hitURL);
                const result = await response.json();
                
                console.log("Date primite de la API:", result);

                // Verificăm unde e valoarea (counterapi.dev o pune de obicei în result.count sau result.data.count)
                const finalCount = result.data.up_count;

                if (finalCount !== undefined) {
                    display.innerText = finalCount;

                    // Salvăm local ca să nu mai poată apăsa la refresh
                    localStorage.setItem('hasHighFived', 'true');

                }
            } catch (error) {
                console.error("Eroare la comunicarea cu API-ul:", error);
            }
        });
    }





    //hamburger
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');
    const overlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.main-nav a');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Blocăm scroll-ul paginii când meniul e deschis
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Închidem meniul la click pe overlay
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Închidem meniul când se dă click pe un link (important pentru One-Page)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

});