/* for menu bar */

const menuBarIcon = document.querySelector('.menu-bar-icon');
const xmark = document.querySelector('.xmark')
const menuInfo = document.querySelector('.menu-info')


menuBarIcon.addEventListener('click', () => {
    menuInfo.classList.toggle('active');
    menuInfo.style.transform = 'translateX(0px)';
    menuInfo.style.transition = '0.5s ease';
    menuBarIcon.style.display = 'none';
    xmark.style.display = 'block';
});

xmark.addEventListener('click', () => {
    menuInfo.classList.toggle('active');
    menuInfo.style.transform = 'translateX(-245px)';
    xmark.style.display = 'none';
    menuBarIcon.style.display = 'block';
});

/* for menu bar */










