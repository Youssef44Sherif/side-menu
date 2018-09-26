var closeX = document.getElementById('closeX');
var openX = document.getElementById('openX');
var navX = document.getElementById('navX');
var bodyX = document.getElementById('bodyX');
function closeMenu() {
    navX.style.margin = "-30% 0";
    bodyX.style.background = "#000";
    navX.style.color = "#000";
}
function openMenu() {
    navX.style.margin = "0";
    navX.style.width = "30%"
    bodyX.style.background = "#fff"
}