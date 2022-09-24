/* for dog */

const dogSpeaker = document.getElementById('dog-speaker');
const dogBark = document.getElementById('dog-barkling');
const dog = document.getElementById('dog');
const dogTranslator = document.getElementById('dog-translator');
const dogGeorgianName = document.querySelector('.dog-georgian-description');
const dogEnglishName = document.querySelector('.dog-english-description');

dogSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(dogGeorgianName).display == 'block') {
        dogBark.play();
    } else {
        dog.play();
    }
});

dogTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(dogGeorgianName).display == 'block') {
        dogGeorgianName.style.display = 'none';
        dogEnglishName.style.display = 'block';
    } else {
        dogEnglishName.style.display = 'none';
        dogGeorgianName.style.display = 'block';
    }
});

/* for dog */


/* for cat */

const catSpeaker = document.getElementById('cat-speaker');
const catMeow = document.getElementById('cat-meow');
const cat = document.getElementById('cat');
const catTranslator = document.getElementById('cat-translator');
const catGeorgianName = document.querySelector('.cat-georgian-description');
const catEnglishName = document.querySelector('.cat-english-description');

catSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(catGeorgianName).display == 'block') {
        catMeow.play();
    } else {
        cat.play();
    }
});

catTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(catGeorgianName).display == 'block') {
        catGeorgianName.style.display = 'none';
        catEnglishName.style.display = 'block';
    } else {
        catEnglishName.style.display = 'none';
        catGeorgianName.style.display = 'block';
    }
});

/* for cat */


/* for cow */

const cowSpeaker = document.getElementById('cow-speaker');
const cowMoo = document.getElementById('cow-moo');
const cow = document.getElementById('cow');
const cowTranslator = document.getElementById('cow-translator');
const cowGeorgianName = document.querySelector('.cow-georgian-description');
const cowEnglishName = document.querySelector('.cow-english-description');

cowSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(cowGeorgianName).display == 'block') {
        cowMoo.play();
    } else {
        cow.play();
    }
});

cowTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(cowGeorgianName).display == 'block') {
        cowGeorgianName.style.display = 'none';
        cowEnglishName.style.display = 'block';
    } else {
        cowEnglishName.style.display = 'none';
        cowGeorgianName.style.display = 'block';
    }
});

/* for cow */


/* for bull */

const bullSpeaker = document.getElementById('bull-speaker');
const bullRoar = document.getElementById('bull-roar');
const bull = document.getElementById('bull');
const bullTranslator = document.getElementById('bull-translator');
const bullGeorgianName = document.querySelector('.bull-georgian-description');
const bullEnglishName = document.querySelector('.bull-english-description');

bullSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(bullGeorgianName).display == 'block') {
        bullRoar.play();
    } else {
        bull.play();
    }
});

bullTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(bullGeorgianName).display == 'block') {
        bullGeorgianName.style.display = 'none';
        bullEnglishName.style.display = 'block';
    } else {
        bullEnglishName.style.display = 'none';
        bullGeorgianName.style.display = 'block';
    }
});

/* for bull */


/* for pig */

const pigSpeaker = document.getElementById('pig-speaker');
const pigSqueal = document.getElementById('pig-squeal');
const pig = document.getElementById('pig');
const pigTranslator = document.getElementById('pig-translator');
const pigGeorgianName = document.querySelector('.pig-georgian-description');
const pigEnglishName = document.querySelector('.pig-english-description');

pigSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(pigGeorgianName).display == 'block') {
        pigSqueal.play();
    } else {
        pig.play();
    }
});

pigTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(pigGeorgianName).display == 'block') {
        pigGeorgianName.style.display = 'none';
        pigEnglishName.style.display = 'block';
    } else {
        pigEnglishName.style.display = 'none';
        pigGeorgianName.style.display = 'block';
    }
});

/* for pig */


/* for donkey */

const donkeySpeaker = document.getElementById('donkey-speaker');
const donkeySound = document.getElementById('donkey-sound');
const donkey = document.getElementById('donkey');
const donkeyTranslator = document.getElementById('donkey-translator');
const donkeyGeorgianName = document.querySelector('.donkey-georgian-description');
const donkeyEnglishName = document.querySelector('.donkey-english-description');

donkeySpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(donkeyGeorgianName).display == 'block') {
        donkeySound.play();
    } else {
        donkey.play();
    }
});

donkeyTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(donkeyGeorgianName).display == 'block') {
        donkeyGeorgianName.style.display = 'none';
        donkeyEnglishName.style.display = 'block';
    } else {
        donkeyEnglishName.style.display = 'none';
        donkeyGeorgianName.style.display = 'block';
    }
});

/* for donkey */


/* for horse */

const horseSpeaker = document.getElementById('horse-speaker');
const horseSound = document.getElementById('horse-sound');
const horse = document.getElementById('horse');
const horseTranslator = document.getElementById('horse-translator');
const horseGeorgianName = document.querySelector('.horse-georgian-description');
const horseEnglishName = document.querySelector('.horse-english-description');

horseSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(horseGeorgianName).display == 'block') {
        horseSound.play();
    } else {
        horse.play();
    }
});

horseTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(horseGeorgianName).display == 'block') {
        horseGeorgianName.style.display = 'none';
        horseEnglishName.style.display = 'block';
    } else {
        horseEnglishName.style.display = 'none';
        horseGeorgianName.style.display = 'block';
    }
});

/* for horse */


/* for goat */

const goatSpeaker = document.getElementById('goat-speaker');
const goatSound = document.getElementById('goat-sound');
const goat = document.getElementById('goat');
const goatTranslator = document.getElementById('goat-translator');
const goatGeorgianName = document.querySelector('.goat-georgian-description');
const goatEnglishName = document.querySelector('.goat-english-description');

goatSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(goatGeorgianName).display == 'block') {
        goatSound.play();
    } else {
        goat.play();
    }
});

goatTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(goatGeorgianName).display == 'block') {
        goatGeorgianName.style.display = 'none';
        goatEnglishName.style.display = 'block';
    } else {
        goatEnglishName.style.display = 'none';
        goatGeorgianName.style.display = 'block';
    }
});

/* for goat */
