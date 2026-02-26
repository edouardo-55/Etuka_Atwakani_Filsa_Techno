/* ===============================
   FILSA TECHNOLOGIE - Script Pro
================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Filsa Technologie - Site chargé avec succès.");

    initProductButtons();
    initMainButton();

});

/* ===============================
   PRODUITS
================================= */

function initProductButtons() {
    const productButtons = document.querySelectorAll(".product .btn");

    productButtons.forEach(button => {
        button.addEventListener("click", handleProductClick);
    });
}

function handleProductClick(event) {
    event.preventDefault();

    const productCard = event.currentTarget.closest(".product");
    const productName = productCard?.querySelector("h3")?.textContent || "ce produit";

    showNotification(`Merci de votre intérêt pour ${productName} 🚀`);
}

/* ===============================
   BOUTON PRINCIPAL
================================= */

function initMainButton() {
    const mainButton = document.querySelector(".btn-main");

    if (!mainButton) return;

    mainButton.addEventListener("click", (event) => {
        event.preventDefault();

        showNotification("Redirection vers nos produits...");

        setTimeout(() => {
            window.location.href = "produits.html";
        }, 1500);
    });
}

/* ===============================
   NOTIFICATION MODERNE
================================= */

function showNotification(message) {

    const notification = document.createElement("div");
    notification.className = "custom-notification";
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(), 300);
    }, 3000);
