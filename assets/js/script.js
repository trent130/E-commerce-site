let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 10000); // Change image every 2 seconds (adjust as needed)
}

showSlides(); // Start the slideshow

// Get the current year and set it in the "currentYear" span
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Get the user's country/region
if (window.navigator.languages) {
    // Modern browsers
    const userLanguage = window.navigator.languages[0];
    document.getElementById("countryRegion").textContent = userLanguage;
} else {
    // Fallback for older browsers
    const userLanguage = window.navigator.userLanguage || window.navigator.language;
    document.getElementById("countryRegion").textContent = userLanguage;
}

