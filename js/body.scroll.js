// Funktion, die beim Scrollen die Klasse toggelt
function handleScroll() {
    const body = document.body;
    if (window.scrollY > 0) {
        body.classList.add('scroll'); // Klasse hinzufügen, wenn gescrollt
    } else {
        body.classList.remove('scroll'); // Klasse entfernen, wenn oben
    }
}

// Event Listener für Scroll
window.addEventListener('scroll', handleScroll);
