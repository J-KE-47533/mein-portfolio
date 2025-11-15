// Funktion, um den Collapser-Inhalt ein- oder auszublenden
function toggleCollapser(button) {
    // Alle anderen Collapser schließen
    const allContent = document.querySelectorAll('.collapser-content');
    allContent.forEach(content => {
        if (content !== button.nextElementSibling) {
            content.style.maxHeight = '0';
            content.style.display = 'none';  // Setzt display auf 'none' bei geschlossenem Collapser
            content.classList.remove('open');
            content.previousElementSibling.classList.remove('open'); // Collapser-Button zurückdrehen
        }
    });

    // Der aktuelle Collapser wird geöffnet oder geschlossen
    const content = button.nextElementSibling;
    if (content.classList.contains('open')) {
        // Schließen: max-height und display zurücksetzen
        content.style.maxHeight = '0';
        content.style.display = 'none';  // Display auf 'none' setzen
        content.classList.remove('open');
        button.classList.remove('open');
    } else {
        // Öffnen: max-height dynamisch setzen, um die Animation zu starten
        content.style.display = 'block'; // Sicherstellen, dass der Inhalt sichtbar ist
        const scrollHeight = content.scrollHeight + 'px';
        content.style.maxHeight = scrollHeight;
        content.classList.add('open');
        button.classList.add('open');
    }
}

// Alle Collapser-Buttons durchgehen und Event Listener hinzufügen
const buttons = document.querySelectorAll('.collapser-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => toggleCollapser(button));
});