// Select elements
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const emailMsg = document.querySelector("#email-msg");
const matchMessage = document.querySelector("#error-msg");
const previewContainer = document.querySelector("#preview-container");

const checkEmailBtn = document.querySelector("#check-email-btn");
const checkBtn = document.querySelector("#check-btn");

// Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;


// ✅ Check Email Button
checkEmailBtn.addEventListener("click", function () {

    if (emailRegex.test(email.value)) {
        emailMsg.textContent = " ✔ Email is valid";

        emailMsg.style.color = "green";
    } else {
        emailMsg.textContent = " ✖ Invalid email";
        emailMsg.style.color = "red";
    }
});


// ✅ Password color check (still live)
password.addEventListener("input", function () {
    if (passwordRegex.test(password.value)) {
        password.style.backgroundColor = "red";
    } else {
        password.style.backgroundColor = "gray";
    }
});


// ✅ Check Password Button
checkBtn.addEventListener("click", function () {

    if (confirmPassword.value === "") {
        matchMessage.textContent = " Please confirm password";
        return;
    }

    if (confirmPassword.value !== password.value) {
        matchMessage.textContent = " ✖ Passwords do not match";
        matchMessage.style.color = "red";
    } else {
        matchMessage.textContent = " ✔ Passwords match";
        matchMessage.style.color = "green";

        // ✅ FINAL SUCCESS MESSAGE
        if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {

            let time = new Date().toLocaleString();

            previewContainer.innerHTML = `
                <p style="color:green;">✔ Registration Successful</p>
                <p>Email: ${email.value}</p>
            `;
        }
    }
});
