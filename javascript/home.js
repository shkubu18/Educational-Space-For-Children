/* this function rotates card and after that goes to detail page */

const card = document.querySelectorAll('.main-container a');

for (const cards of card) {
    cards.addEventListener('click', (e) => {
        const cardName = e.currentTarget.getAttribute('attribute')
            cards.classList.toggle('clicked');
            setTimeout(() => {
            window.location.href = `${cardName}.html`
        }, 2000);
    })
}

/* this function rotates card and after that goes to detail page */


/* scroll effects */

const wildAnimals = document.getElementById('wild-animals');
const wildBirds = document.getElementById('wild-birds');
const fruit = document.getElementById('fruit');
const vejetable = document.getElementById('vejetable');
const emotion = document.getElementById('emotion');
const clothe = document.getElementById('clothe');
const nature = document.getElementById('nature');
const city = document.getElementById('city');

if (window.matchMedia("(max-width: 800px)").matches) {
    wildAnimals.style.transform = 'scale(0)';
    wildBirds.style.transform = 'scale(0)';
    fruit.style.transform = 'scale(0)';
    vejetable.style.transform = 'scale(0)';
    emotion.style.transform = 'scale(0)';
    clothe.style.transform = 'scale(0)';
    nature.style.transform = 'scale(0)';
    city.style.transform = 'scale(0)';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        wildAnimals.style.transform = 'scale(1)';
        wildAnimals.style.removeProperty('transform');
    } if (window.scrollY > 500) {
        wildBirds.style.transform = 'scale(1)';
        wildBirds.style.removeProperty('transform');
    } if (window.scrollY > 850) {
        fruit.style.transform = 'scale(1)';
        fruit.style.removeProperty('transform');
    } if (window.scrollY > 1200) {
        vejetable.style.transform = 'scale(1)';
        vejetable.style.removeProperty('transform');
    } if (window.scrollY > 1500) {
        emotion.style.transform = 'scale(1)';
        emotion.style.removeProperty('transform');
    } if (window.scrollY > 1850) {
        clothe.style.transform = 'scale(1)';
        clothe.style.removeProperty('transform');
    } if (window.scrollY > 2200) {
        nature.style.transform = 'scale(1)';
        nature.style.removeProperty('transform');
    } if (window.scrollY > 2500) {
        city.style.transform = 'scale(1)';
        city.style.removeProperty('transform');
    }
})

/* scroll effects */