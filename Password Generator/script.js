// script.js
document.addEventListener("DOMContentLoaded", function() {
    generatePassword();
    updateLengthDisplay();
});
document.getElementById("generateButton").addEventListener("click", generatePassword);
document.getElementById("copyButton").addEventListener("click", copyPassword);
document.getElementById("lengthSlider").addEventListener("input", updateLengthDisplay);

function generatePassword() {
    const length = document.getElementById("lengthSlider").value;
    const useUpper = document.getElementById("useUpper").checked;
    const useLower = document.getElementById("useLower").checked;
    const useDigits = document.getElementById("useDigits").checked;
    const useSymbols = document.getElementById("useSymbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()";

    let all = "";
    if (useUpper) all += upper;
    if (useLower) all += lower;
    if (useDigits) all += digits;
    if (useSymbols) all += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    document.getElementById("passwordDisplay").value = password;
}

function copyPassword() {
    const password = document.getElementById("passwordDisplay").value;
    navigator.clipboard.writeText(password)
        .then(() => alert("Passwort kopiert!"))
        .catch(err => alert("Fehler beim Kopieren: ", err));
}

function updateLengthDisplay() {
    const length = document.getElementById("lengthSlider").value;
    document.getElementById("lengthDisplay").textContent = length;
}
