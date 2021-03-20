if (document.documentElement.clientWidth <= 959) {
    document.location.href = "ссылка на мобильную версию";
}

/*при ресайзинге*/
 window.onresize = function(event) {
    if (document.documentElement.clientWidth <= 959) {
    document.location.href = "ссылка на мобильную версию";
    }
};
