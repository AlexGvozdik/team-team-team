window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});


function preloader() {
    $(() => {
        setTimeout(() => {
            let p = $(".preloader");

            p.css("opacity", 0);

            setTimeout(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
            );
        }, 1000);

    });
}
setTimeout(() => preloader(), 50);



