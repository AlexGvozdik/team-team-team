const popap = document.querySelector('.popap');
const close = document.querySelector('.close');

window.onload = function () {
    setTimeout(function () {
        popap.style.display = "block"
    }, 3000)
}
close.addEventListener('click', () => {
    popap.style.display = "none";
    
})