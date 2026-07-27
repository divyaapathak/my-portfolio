// ==========================
// TYPING TEXT
// ==========================

new Typed(".typing", {
    strings: [
        "Frontend Developer",
        "AI Engineer",
        "Web Developer",
        "React Developer",
        "Python Developer",
        "Machine Learning Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.querySelector(".progress").style.width = progress + "%";

});

// ==========================
// CUSTOM CURSOR
// ==========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

let dark = true;

themeBtn.addEventListener("click", () => {

    if (dark) {

        document.documentElement.style.setProperty("--bg", "#F8FAFC");
        document.documentElement.style.setProperty("--white", "#111827");
        document.documentElement.style.setProperty("--gray", "#374151");

        document.body.style.background = "#F8FAFC";
        document.body.style.color = "#111827";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.documentElement.style.setProperty("--bg", "#030712");
        document.documentElement.style.setProperty("--white", "#F8FAFC");
        document.documentElement.style.setProperty("--gray", "#94A3B8");

        document.body.style.background = "#030712";
        document.body.style.color = "#F8FAFC";

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

});

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealItems = document.querySelectorAll(
    ".project,.box,.skills div,.certificate span"
);

function reveal() {

    revealItems.forEach((item) => {

        const windowHeight = window.innerHeight;
        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 80) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
