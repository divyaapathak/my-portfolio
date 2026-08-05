
if (document.querySelector(".typing")) {
    new Typed(".typing", {
        strings: [
            "AI Engineer",
            "Frontend Developer",
            "Web Developer",
            "Computer Science Student"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    const icon = themeBtn.querySelector("i");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (icon) {
            if (document.body.classList.contains("light")) {
                icon.classList.replace("fa-moon", "fa-sun");
            } else {
                icon.classList.replace("fa-sun", "fa-moon");
            }
        }
    });
}

// ==============================
// Scroll Progress Bar
// ==============================

const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {
    if (!progress) return;

    const scrollTop = window.scrollY;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / height) * 100;
    progress.style.width = percent + "%";
});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// Custom Cursor
// ==============================

const cursor = document.querySelector(".cursor");

if (cursor) {

    window.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}

// ==============================
// Reveal Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// ==============================
// Ripple Effect
// ==============================

document.querySelectorAll("button, .btn1, .btn2").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left =
            e.clientX - this.getBoundingClientRect().left - diameter / 2 + "px";

        circle.style.top =
            e.clientY - this.getBoundingClientRect().top - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

}