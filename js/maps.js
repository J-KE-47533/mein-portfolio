// Feste Zieladresse
const zielAdresse = "Albrecht-Dürer Berufskolleg";

document.getElementById("routenForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const startAdresse = document.getElementById("startAdresse").value;

    // Generiere den Google Maps Link
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(startAdresse)}&destination=${encodeURIComponent(zielAdresse)}`;

    // Öffne den Link
    window.open(mapsUrl, "_blank");
});