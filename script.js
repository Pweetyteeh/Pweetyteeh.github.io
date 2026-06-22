
document.addEventListener("DOMContentLoaded", function () {
    console.log("1. DOM is fully loaded, script is running!");

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    console.log("2. Found buttons:", filterButtons.length);
    console.log("3. Found project cards:", projectCards.length);

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("4. A filter button was clicked!");
            const filter = this.getAttribute("data-filter");
            console.log("5. Selected filter value:", filter);

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");

            projectCards.forEach(function (card) {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.classList.remove("card-hidden");
                    console.log("Showing card:", card);
                } else {
                    card.classList.add("card-hidden");
                    console.log("Hiding card:", card);
                }
            });
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
                // Reveal the element with a fade-in/slide-up
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            }
        });
    }, observerOptions);

    // Watch all project cards and the about section
    const animatedElements = document.querySelectorAll(".project-card, .about");
    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
