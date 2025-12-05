document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevents page reload
    document.getElementById("thank-you").classList.remove("hidden");
});