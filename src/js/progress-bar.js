// const progress = document.querySelector('.progress');

// window.addEventListener('scroll', progressBar);

// function progressBar(e) {
//     let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let windowHeight = documentElement.scrollHeight - document.documentElement.clientHeight;
//     let per = windowScroll / windowHeight * 100; 
//     progress.style.width = per + '%';
// }  
function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;

    document.getElementById('progressBar').style.width = scrolled + '%';
}

window.addEventListener('scroll', progressBar);