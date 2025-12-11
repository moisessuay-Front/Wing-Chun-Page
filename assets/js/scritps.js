const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const audio = document.getElementById("test-volumen");
audio.volume = 0.1; // Valor entre 0.0 y 1.0