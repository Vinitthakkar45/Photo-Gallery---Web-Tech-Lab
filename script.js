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
    const form = document.querySelector(".feedback-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.pdpu.ac.in$/;

        if (!name) alert("Name cannot be empty");
        else if (!emailPattern.test(email)) alert("Only PDPU Email ID is allowed");
        else alert("Form submitted successfully!");
    });
});