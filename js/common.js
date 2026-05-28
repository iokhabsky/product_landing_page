window.onload = () => {
    const linePath = document.querySelector('.road_progress');
    const lineLength = linePath.getTotalLength();
    const allSteps = document.querySelectorAll(".s-process-steps .step");

    linePath.style.strokeDasharray = lineLength;
    linePath.style.strokeDashoffset = lineLength;

    linePath.style.opacity = 1;

    function animateLine() {
        let currStep = 0;
        setTimeout(() => {
            linePath.style.strokeDashoffset = lineLength * 0.66;
            currStep++;
        }, 0);

        setTimeout(() => {
            linePath.style.strokeDashoffset = lineLength * 0.33;
            currStep++;
        }, 1200);

        setTimeout(() => {
            linePath.style.strokeDashoffset = 0;
            currStep++;
        }, 2400);
    }

    function resetLine() {
        linePath.style.strokeDashoffset = 1000;
        allSteps.forEach((i) => {
            i.classList.remove("active");
        })
    }

    function showBlocks() {
        const animatedItems = document.querySelectorAll(".js-animate");
        animatedItems.forEach(item => observer.observe(item));
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    if (entry.target.id === "animation_line") {
                        animateLine();
                    }

                    entry.target.classList.add("animated");
                }

                // EXIT (зник з viewport)
                else {
                    entry.target.classList.remove("animated");

                    // якщо хочеш ресет для SVG:
                    if (entry.target.id === "animation_line") {
                        resetLine(); // якщо така функція є
                    }
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    showBlocks();
    setUI();

    function setUI() {

        // Slider code
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            },
        }); //


    }
}