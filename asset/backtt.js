$(function () {
    var header = document.getElementById('back');
    var btnbacktotop = document.getElementById('btnbacktotop');
    $(window).on('scroll', function () {
        // header
        if ($(this).scrollTop() < 10) {
            header.style.position="relative";
        } else {
            header.style.position="fixed";
        }
        // back top
        if ($(this).scrollTop() < 80) {
            btnbacktotop.style.display="none";
        } else {
            btnbacktotop.style.display="initial";
        }
    });
});