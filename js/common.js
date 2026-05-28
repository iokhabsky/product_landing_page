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
            allSteps[currStep].classList.add("active");
            currStep++;
        }, 0);

        setTimeout(() => {
            linePath.style.strokeDashoffset = lineLength * 0.33;
            allSteps[currStep].classList.add("active");
            currStep++;
        }, 1200);

        setTimeout(() => {
            linePath.style.strokeDashoffset = 0;
            allSteps[currStep].classList.add("active");
            currStep++;
        }, 2400);
    }

    function showBlocks() {
        const animatedItems = document.querySelectorAll(".js-animate");
        animatedItems.forEach(item => observer.observe(item));
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateLine();
                    observer.unobserve(entry.target);
                    entry.target.classList.add("animated");
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    observer.observe(document.querySelector("#animation_line"));

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