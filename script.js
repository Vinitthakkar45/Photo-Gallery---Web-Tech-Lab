document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.className = "lightbox";
            document.body.appendChild(lightbox);
            const img = document.createElement("img");
            img.src = this.src;
            lightbox.appendChild(img);

            setTimeout(() => {
                lightbox.classList.add('visible');
            }, 10);

            lightbox.addEventListener("click", function () {
                lightbox.classList.remove('visible');
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 400);
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const mobile = document.getElementById("mobile").value;
        const mobilePattern = /^[6-9]\d{9}$/;

        if (username === "" || password === "") alert("Both fields are required.");
        else if (!mobilePattern.test(mobile)) alert("Mobile number must Start with 6, 7, 8, or 9 and should be of exactly 10 digits");
        else alert("Form submitted successfully!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) alert("Invalid Email Format!");
        else alert("Form submitted successfully!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Feedback Form 1
    const form1 = document.querySelector(".feedback-form1");
    form1.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.pdpu\.ac\.in$/;
        const phonePattern = /^[6-9]{1}[0-9]{9}$/;
        const contactMethod = document.querySelector('input[name="contact-method"]:checked');
        const subscribe = document.getElementById("subscribe").checked;

        if (!name || !email || !phone || !message || !contactMethod) {
            alert("All fields are required!");
        } else if (!emailPattern.test(email)) {
            alert("Only PDPU Email ID is allowed (example: user@pdpu.ac.in)");
        } else if (!phonePattern.test(phone)) {
            alert("Phone number must start with 6, 7, 8, or 9 and be exactly 10 digits.");
        } else {
            alert(`Feedback submitted successfully!\nPreferred Contact Method: ${contactMethod.value}\nSubscribed to Newsletter: ${subscribe ? "Yes" : "No"}`);
            form1.reset();
        }
    });

    // Feedback Form 2
    const form2 = document.querySelector(".feedback-form2");
    form2.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name2").value.trim();
        const password = document.getElementById("password").value;
        const conPassword = document.getElementById("con-password").value;
        const accountType = document.querySelector('input[name="account-type"]:checked');

        if (!name || !password || !conPassword || !accountType) {
            alert("All fields are required!");
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
        } else if (!/(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            alert("Password must contain at least one uppercase letter and one number.");
        } else if (password !== conPassword) {
            alert("Passwords do not match.");
        } else {
            alert(`Account created successfully! Account Type: ${accountType.value}`);
            form2.reset();
        }
    });

    // Feedback Form 3
    const form3 = document.querySelector(".feedback-form3");
    form3.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email2").value.trim();
        const recoveryEmail = document.getElementById("con-email").value.trim();
        const newPassword = document.getElementById("password2").value;
        const reasons = Array.from(document.querySelectorAll('input[name="reason"]:checked')).map(checkbox => checkbox.value);

        if (!email || !recoveryEmail || !newPassword) {
            alert("All fields are required!");
        } else if (!emailPattern.test(email)) {
            alert("Only PDPU Email ID is allowed (example: user@pdpu.ac.in)");
        } else if (!emailPattern.test(recoveryEmail)) {
            alert("Recovery email must be a PDPU Email ID (example: user@pdpu.ac.in)");
        } else if (newPassword.length < 8) {
            alert("New password must be at least 8 characters long.");
        } else if (!/(?=.*[A-Z])(?=.*[0-9])/.test(newPassword)) {
            alert("New password must contain at least one uppercase letter and one number.");
        } else {
            alert(`Account recovered successfully!\nReason(s) for recovery: ${reasons.length > 0 ? reasons.join(", ") : "None"}`);
            form3.reset();
        }
    });
});
