document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle
    const themeToggle = document.querySelector(".theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "\u2600";
    }

    themeToggle.addEventListener("click", function () {
        const currentTheme = document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "\u263E";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "\u2600";
        }
    });

    // Project filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");

            projectCards.forEach(function (card) {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.classList.remove("card-hidden");
                } else {
                    card.classList.add("card-hidden");
                }
            });
        });
    });

    // Scroll-triggered animations with IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".project-card, .about");
    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
});
