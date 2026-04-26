// ================================================
// Binderbubi Backyard Running - Main Script
// ================================================

function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll(".main-nav a");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = mainNav.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  if (hamburger) hamburger.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) toggleMenu();
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initHamburgerMenu();

  const imageFolder = "images/";
  const totalImages = 122; // Update this number if you add/remove images

  // Array of image names (you can expand this easily)
  const galleryImages = Array.from({ length: totalImages }, (_, i) => {
    const num = i + 1;
    return `image (${num}).webp`;
  });

  // =========================================
  // 1. DYNAMIC GALLERY SLIDER
  // =========================================
  const sliderWrapper = document.getElementById("sliderWrapper");

  function loadGallery() {
    if (!sliderWrapper) return;

    sliderWrapper.innerHTML = ""; // Clear existing images

    galleryImages.forEach((imgName, index) => {
      const img = document.createElement("img");
      img.src = imageFolder + imgName;
      img.alt = `Binderbubi Backyard Running - Imagine ${index + 1}`;
      img.classList.add("slide");
      if (index === 0) img.classList.add("active");
      img.loading = index < 6 ? "eager" : "lazy"; // Load first few images faster
      sliderWrapper.appendChild(img);
    });
  }

  // Load images into gallery
  loadGallery();

  // =========================================
  // 2. SLIDER FUNCTIONALITY
  // =========================================
  let currentIndex = 0;
  let slideInterval;
  const slides = () => document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function showSlide(index) {
    const allSlides = slides();
    if (allSlides.length === 0) return;

    allSlides.forEach((slide) => slide.classList.remove("active"));

    currentIndex = (index + allSlides.length) % allSlides.length;
    allSlides[currentIndex].classList.add("active");
  }

  function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
      resetAutoSlide();
    });

    startAutoSlide();
  }

  // =========================================
  // 3. LIGHTBOX / MODAL
  // =========================================
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imgFull");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close-modal");

  function openImage(imgElement) {
    if (!imgElement || !modal || !modalImg) return;

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.textContent = imgElement.alt || "";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  // Click on any image in the slider
  if (sliderWrapper) {
    sliderWrapper.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        openImage(e.target);
      }
    });
  }

  // Close modal events
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      // Close only if clicking on background, not on the image
      if (e.target === modal) closeModal();
    });
  }

  // ESC key support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // =========================================
  // 4. HIGH FIVE BUTTON
  // =========================================
  const highFiveBtn = document.getElementById("highFiveBtn");
  const countWrapper = document.getElementById("countWrapper");
  const hitURL =
    "https://api.counterapi.dev/v2/andrei-holergas-team-3535/batepalma/up";

  if (highFiveBtn) {
    const hasHighFived = localStorage.getItem("hasHighFived");

    if (hasHighFived === "true") {
      highFiveBtn.innerHTML =
        '<img src="images/thumbsup.webp" style=" width: 15vw;"/>';
      highFiveBtn.disabled = true;
      countWrapper.style.opacity = "1";
    } else {
      highFiveBtn.addEventListener("click", async () => {
        // Visual feedback
        highFiveBtn.innerHTML =
          '<img src="images/thumbsup.webp" style=" width: 15vw;"/>';
        highFiveBtn.disabled = true;
        countWrapper.style.opacity = "1";

        try {
          const response = await fetch(hitURL);
          const result = await response.json();

          // Save to localStorage so user can't spam
          localStorage.setItem("hasHighFived", "true");
        } catch (error) {
          console.error("Counter API error:", error);
        }
      });
    }
  }

  // =========================================
  // 5. MOBILE HAMBURGER MENU
  // =========================================
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll(".main-nav a");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
    overlay.classList.toggle("active");

    document.body.style.overflow = mainNav.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  if (hamburger) hamburger.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // =========================================
  // INIT
  // =========================================
  console.log(
    "%cBinderbubi Backyard Running - Script loaded successfully",
    "color: #4CAF50; font-weight: bold;",
  );

  const eventGrid = document.getElementById("eventsGrid");
  const eventButton = document.getElementById("eventBtn");

  eventButton.addEventListener("click", () => {
    eventGrid.classList.toggle("expanded");
    eventButton.textContent = eventGrid.classList.contains("expanded")
      ? "Vezi mai puține"
      : "Vezi mai multe";
  });
});
