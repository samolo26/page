// Botones: abrir enlaces en nueva pestaña
document.querySelectorAll(".link-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = btn.dataset.url;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Año actual en el footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
