const targetElement = document.querySelector('.item.center.menC');
document.querySelectorAll('[id*="yandex"]').forEach(el => el.remove());
document.querySelectorAll('.date, .socBlock, .nav').forEach(el => el.remove());
if (targetElement) {
    document.body.innerHTML = ''; 
    document.body.appendChild(targetElement);
}
