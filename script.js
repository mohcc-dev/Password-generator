document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
    updateStrength(password);
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert("تم نسخ كلمة المرور!");
}

function updateStrength(password) {
    const strengthIndicator = document.getElementById('strength-indicator');
    const lengthCriteria = password.length >= 12;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+{}|:"<>?]/.test(password);

    let strength = "ضعيفة";

    if (lengthCriteria && hasUppercase && hasNumber && hasSymbol) {
        strength = "قوية";
    } else if (lengthCriteria && (hasUppercase || hasNumber || hasSymbol)) {
        strength = "متوسطة";
    }

    strengthIndicator.textContent = `قوة كلمة المرور: ${strength}`;
}
