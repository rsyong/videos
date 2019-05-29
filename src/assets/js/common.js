(function () {
    //适配移动端rem
    var newRem = function () {
        var html = document.documentElement;
        var ClientWidth = html.getBoundingClientRect().width;
        html.style.fontSize = ClientWidth / 108 + 'px';
    };
    window.addEventListener('resize', newRem, false);
    newRem();
})();