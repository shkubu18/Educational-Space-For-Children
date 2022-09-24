/* for rooster */

const roosterSpeaker = document.getElementById('rooster-speaker');
const roosterSound = document.getElementById('rooster-sound');
const rooster = document.getElementById('rooster');
const roosterTranslator = document.getElementById('rooster-translator');
const roosterGeorgianName = document.querySelector('.rooster-georgian-description');
const roosterEnglishName = document.querySelector('.rooster-english-description');

roosterSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(roosterGeorgianName).display == 'block') {
        roosterSound.play();
    } else {
        rooster.play();
    }
});

roosterTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(roosterGeorgianName).display == 'block') {
        roosterGeorgianName.style.display = 'none';
        roosterEnglishName.style.display = 'block';
    } else {
        roosterEnglishName.style.display = 'none';
        roosterGeorgianName.style.display = 'block';
    }
});

/* for rooster */


/* for chicken */

const chickenSpeaker = document.getElementById('chicken-speaker');
const chickenSound = document.getElementById('chicken-sound');
const chicken = document.getElementById('chicken');
const chickenTranslator = document.getElementById('chicken-translator');
const chickenGeorgianName = document.querySelector('.chicken-georgian-description');
const chickenEnglishName = document.querySelector('.chicken-english-description');

chickenSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(chickenGeorgianName).display == 'block') {
        chickenSound.play();
    } else {
        chicken.play();
    }
});

chickenTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(chickenGeorgianName).display == 'block') {
        chickenGeorgianName.style.display = 'none';
        chickenEnglishName.style.display = 'block';
    } else {
        chickenEnglishName.style.display = 'none';
        chickenGeorgianName.style.display = 'block';
    }
});

/* for chicken */


/* for duck */

const duckSpeaker = document.getElementById('duck-speaker');
const duckSound = document.getElementById('duck-sound');
const duck = document.getElementById('duck');
const duckTranslator = document.getElementById('duck-translator');
const duckGeorgianName = document.querySelector('.duck-georgian-description');
const duckEnglishName = document.querySelector('.duck-english-description');

duckSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(duckGeorgianName).display == 'block') {
        duckSound.play();
    } else {
        duck.play();
    }
});

duckTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(duckGeorgianName).display == 'block') {
        duckGeorgianName.style.display = 'none';
        duckEnglishName.style.display = 'block';
    } else {
        duckEnglishName.style.display = 'none';
        duckGeorgianName.style.display = 'block';
    }
});

/* for duck */


/* for goose */

const gooseSpeaker = document.getElementById('goose-speaker');
const gooseSound = document.getElementById('goose-sound');
const goose = document.getElementById('goose');
const gooseTranslator = document.getElementById('goose-translator');
const gooseGeorgianName = document.querySelector('.goose-georgian-description');
const gooseEnglishName = document.querySelector('.goose-english-description');

gooseSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(gooseGeorgianName).display == 'block') {
        gooseSound.play();
    } else {
        goose.play();
    }
});

gooseTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(gooseGeorgianName).display == 'block') {
        gooseGeorgianName.style.display = 'none';
        gooseEnglishName.style.display = 'block';
    } else {
        gooseEnglishName.style.display = 'none';
        gooseGeorgianName.style.display = 'block';
    }
});

/* for goose */


/* for chick */

const chickSpeaker = document.getElementById('chick-speaker');
const chickSound = document.getElementById('chick-sound');
const chick = document.getElementById('chick');
const chickTranslator = document.getElementById('chick-translator');
const chickGeorgianName = document.querySelector('.chick-georgian-description');
const chickEnglishName = document.querySelector('.chick-english-description');

chickSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(chickGeorgianName).display == 'block') {
        chickSound.play();
    } else {
        chick.play();
    }
});

chickTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(chickGeorgianName).display == 'block') {
        chickGeorgianName.style.display = 'none';
        chickEnglishName.style.display = 'block';
    } else {
        chickEnglishName.style.display = 'none';
        chickGeorgianName.style.display = 'block';
    }
});

/* for chick */


/* for turkey */

const turkeySpeaker = document.getElementById('turkey-speaker');
const turkeySound = document.getElementById('turkey-sound');
const turkey = document.getElementById('turkey');
const turkeyTranslator = document.getElementById('turkey-translator');
const turkeyGeorgianName = document.querySelector('.turkey-georgian-description');
const turkeyEnglishName = document.querySelector('.turkey-english-description');

turkeySpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(turkeyGeorgianName).display == 'block') {
        turkeySound.play();
    } else {
        turkey.play();
    }
});

turkeyTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(turkeyGeorgianName).display == 'block') {
        turkeyGeorgianName.style.display = 'none';
        turkeyEnglishName.style.display = 'block';
    } else {
        turkeyEnglishName.style.display = 'none';
        turkeyGeorgianName.style.display = 'block';
    }
});

/* for turkey */