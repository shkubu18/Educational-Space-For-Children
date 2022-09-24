/* for happy */

const happySpeaker = document.getElementById('happy-speaker');
const happy = document.getElementById('happy');
const happyTranslator = document.getElementById('happy-translator');
const happyGeorgianName = document.querySelector('.happy-georgian-description');
const happyEnglishName = document.querySelector('.happy-english-description');


happySpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(happyGeorgianName).display == 'none') {
        happy.play();
    } else {
        happyGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        happyGeorgianName.style.color = 'white';
        happyGeorgianName.style.backgroundColor = '#e9185f';
        happyGeorgianName.style.borderRadius = '10px';
        happyGeorgianName.style.paddingInline = '5px';
        happyGeorgianName.style.display = 'flex';
        happyGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            happyGeorgianName.innerText = 'გახარებული';
            happyGeorgianName.style.color = 'var(--blue)';
            happyGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

happyTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(happyGeorgianName).display == 'block') {
        happySpeaker.style.opacity = '1';
        happyGeorgianName.style.display = 'none';
        happyEnglishName.style.display = 'block';
    } else {
        happySpeaker.style.opacity = '0.2';
        happyEnglishName.style.display = 'none';
        happyGeorgianName.style.display = 'block';
    }
});

/* for happy */


/* for sad */

const sadSpeaker = document.getElementById('sad-speaker');
const sad = document.getElementById('sad');
const sadTranslator = document.getElementById('sad-translator');
const sadGeorgianName = document.querySelector('.sad-georgian-description');
const sadEnglishName = document.querySelector('.sad-english-description');


sadSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(sadGeorgianName).display == 'none') {
        sad.play();
    } else {
        sadGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        sadGeorgianName.style.color = 'white';
        sadGeorgianName.style.backgroundColor = '#e9185f';
        sadGeorgianName.style.borderRadius = '10px';
        sadGeorgianName.style.paddingInline = '5px';
        sadGeorgianName.style.display = 'flex';
        sadGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            sadGeorgianName.innerText = 'მოწყენილი';
            sadGeorgianName.style.color = 'var(--blue)';
            sadGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

sadTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(sadGeorgianName).display == 'block') {
        sadSpeaker.style.opacity = '1';
        sadGeorgianName.style.display = 'none';
        sadEnglishName.style.display = 'block';
    } else {
        sadSpeaker.style.opacity = '0.2';
        sadEnglishName.style.display = 'none';
        sadGeorgianName.style.display = 'block';
    }
});

/* for sad */


/* for angry */

const angrySpeaker = document.getElementById('angry-speaker');
const angry = document.getElementById('angry');
const angryTranslator = document.getElementById('angry-translator');
const angryGeorgianName = document.querySelector('.angry-georgian-description');
const angryEnglishName = document.querySelector('.angry-english-description');


angrySpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(angryGeorgianName).display == 'none') {
        angry.play();
    } else {
        angryGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        angryGeorgianName.style.color = 'white';
        angryGeorgianName.style.backgroundColor = '#e9185f';
        angryGeorgianName.style.borderRadius = '10px';
        angryGeorgianName.style.paddingInline = '5px';
        angryGeorgianName.style.display = 'flex';
        angryGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            angryGeorgianName.innerText = 'გაბრაზებული';
            angryGeorgianName.style.color = 'var(--blue)';
            angryGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

angryTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(angryGeorgianName).display == 'block') {
        angrySpeaker.style.opacity = '1';
        angryGeorgianName.style.display = 'none';
        angryEnglishName.style.display = 'block';
    } else {
        angrySpeaker.style.opacity = '0.2';
        angryEnglishName.style.display = 'none';
        angryGeorgianName.style.display = 'block';
    }
});

/* for angry */


/* for tired */

const tiredSpeaker = document.getElementById('tired-speaker');
const tired = document.getElementById('tired');
const tiredTranslator = document.getElementById('tired-translator');
const tiredGeorgianName = document.querySelector('.tired-georgian-description');
const tiredEnglishName = document.querySelector('.tired-english-description');


tiredSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(tiredGeorgianName).display == 'none') {
        tired.play();
    } else {
        tiredGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        tiredGeorgianName.style.color = 'white';
        tiredGeorgianName.style.backgroundColor = '#e9185f';
        tiredGeorgianName.style.borderRadius = '10px';
        tiredGeorgianName.style.paddingInline = '5px';
        tiredGeorgianName.style.display = 'flex';
        tiredGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            tiredGeorgianName.innerText = 'დაღლილი';
            tiredGeorgianName.style.color = 'var(--blue)';
            tiredGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

tiredTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(tiredGeorgianName).display == 'block') {
        tiredSpeaker.style.opacity = '1';
        tiredGeorgianName.style.display = 'none';
        tiredEnglishName.style.display = 'block';
    } else {
        tiredSpeaker.style.opacity = '0.2';
        tiredEnglishName.style.display = 'none';
        tiredGeorgianName.style.display = 'block';
    }
});

/* for tired */


/* for smile */

const smileSpeaker = document.getElementById('smile-speaker');
const smile = document.getElementById('smile');
const smileTranslator = document.getElementById('smile-translator');
const smileGeorgianName = document.querySelector('.smile-georgian-description');
const smileEnglishName = document.querySelector('.smile-english-description');


smileSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(smileGeorgianName).display == 'none') {
        smile.play();
    } else {
        smileGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        smileGeorgianName.style.color = 'white';
        smileGeorgianName.style.backgroundColor = '#e9185f';
        smileGeorgianName.style.borderRadius = '10px';
        smileGeorgianName.style.paddingInline = '5px';
        smileGeorgianName.style.display = 'flex';
        smileGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            smileGeorgianName.innerText = 'ღიმილი';
            smileGeorgianName.style.color = 'var(--blue)';
            smileGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

smileTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(smileGeorgianName).display == 'block') {
        smileSpeaker.style.opacity = '1';
        smileGeorgianName.style.display = 'none';
        smileEnglishName.style.display = 'block';
    } else {
        smileSpeaker.style.opacity = '0.2';
        smileEnglishName.style.display = 'none';
        smileGeorgianName.style.display = 'block';
    }
});

/* for smile */


/* for scared */

const scaredSpeaker = document.getElementById('scared-speaker');
const scared = document.getElementById('scared');
const scaredTranslator = document.getElementById('scared-translator');
const scaredGeorgianName = document.querySelector('.scared-georgian-description');
const scaredEnglishName = document.querySelector('.scared-english-description');


scaredSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(scaredGeorgianName).display == 'none') {
        scared.play();
    } else {
        scaredGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        scaredGeorgianName.style.color = 'white';
        scaredGeorgianName.style.backgroundColor = '#e9185f';
        scaredGeorgianName.style.borderRadius = '10px';
        scaredGeorgianName.style.paddingInline = '5px';
        scaredGeorgianName.style.display = 'flex';
        scaredGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            scaredGeorgianName.innerText = 'შეშინებული';
            scaredGeorgianName.style.color = 'var(--blue)';
            scaredGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

scaredTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(scaredGeorgianName).display == 'block') {
        scaredSpeaker.style.opacity = '1';
        scaredGeorgianName.style.display = 'none';
        scaredEnglishName.style.display = 'block';
    } else {
        scaredSpeaker.style.opacity = '0.2';
        scaredEnglishName.style.display = 'none';
        scaredGeorgianName.style.display = 'block';
    }
});

/* for scared */


/* for surprised */

const surprisedSpeaker = document.getElementById('surprised-speaker');
const surprised = document.getElementById('surprised');
const surprisedTranslator = document.getElementById('surprised-translator');
const surprisedGeorgianName = document.querySelector('.surprised-georgian-description');
const surprisedEnglishName = document.querySelector('.surprised-english-description');


surprisedSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(surprisedGeorgianName).display == 'none') {
        surprised.play();
    } else {
        surprisedGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        surprisedGeorgianName.style.color = 'white';
        surprisedGeorgianName.style.backgroundColor = '#e9185f';
        surprisedGeorgianName.style.borderRadius = '10px';
        surprisedGeorgianName.style.paddingInline = '5px';
        surprisedGeorgianName.style.display = 'flex';
        surprisedGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            surprisedGeorgianName.innerText = 'გაკვირვებული';
            surprisedGeorgianName.style.color = 'var(--blue)';
            surprisedGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

surprisedTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(surprisedGeorgianName).display == 'block') {
        surprisedSpeaker.style.opacity = '1';
        surprisedGeorgianName.style.display = 'none';
        surprisedEnglishName.style.display = 'block';
    } else {
        surprisedSpeaker.style.opacity = '0.2';
        surprisedEnglishName.style.display = 'none';
        surprisedGeorgianName.style.display = 'block';
    }
});

/* for surprised */


/* for laugh */

const laughSpeaker = document.getElementById('laugh-speaker');
const laugh = document.getElementById('laugh');
const laughTranslator = document.getElementById('laugh-translator');
const laughGeorgianName = document.querySelector('.laugh-georgian-description');
const laughEnglishName = document.querySelector('.laugh-english-description');


laughSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(laughGeorgianName).display == 'none') {
        laugh.play();
    } else {
        laughGeorgianName.innerText = "ემოციას ხმა არ აქვს!";
        laughGeorgianName.style.color = 'white';
        laughGeorgianName.style.backgroundColor = '#e9185f';
        laughGeorgianName.style.borderRadius = '10px';
        laughGeorgianName.style.paddingInline = '5px';
        laughGeorgianName.style.display = 'flex';
        laughGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            laughGeorgianName.innerText = 'სიცილი';
            laughGeorgianName.style.color = 'var(--blue)';
            laughGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

laughTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(laughGeorgianName).display == 'block') {
        laughSpeaker.style.opacity = '1';
        laughGeorgianName.style.display = 'none';
        laughEnglishName.style.display = 'block';
    } else {
        laughSpeaker.style.opacity = '0.2';
        laughEnglishName.style.display = 'none';
        laughGeorgianName.style.display = 'block';
    }
});

/* for laugh */


