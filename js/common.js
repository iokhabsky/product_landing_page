window.onload = () => {
    console.log('loaded');
    setUI();

    function setUI() {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            },
        });
    }
}