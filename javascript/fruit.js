/* for strawberry */

const strawberrySpeaker = document.getElementById('strawberry-speaker');
const strawberry = document.getElementById('strawberry');
const strawberryTranslator = document.getElementById('strawberry-translator');
const strawberryGeorgianName = document.querySelector('.strawberry-georgian-description');
const strawberryEnglishName = document.querySelector('.strawberry-english-description');


strawberrySpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(strawberryGeorgianName).display == 'none') {
        strawberry.play();
    } else {
        strawberryGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        strawberryGeorgianName.style.color = 'white';
        strawberryGeorgianName.style.backgroundColor = '#e9185f';
        strawberryGeorgianName.style.borderRadius = '10px';
        strawberryGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            strawberryGeorgianName.innerText = 'მარწყვი';
            strawberryGeorgianName.style.color = 'var(--blue)';
            strawberryGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

strawberryTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(strawberryGeorgianName).display == 'block') {
        strawberrySpeaker.style.opacity = '1';
        strawberryGeorgianName.style.display = 'none';
        strawberryEnglishName.style.display = 'block';
    } else {
        strawberrySpeaker.style.opacity = '0.2';
        strawberryEnglishName.style.display = 'none';
        strawberryGeorgianName.style.display = 'block';
    }
});

/* for strawberry */


/* for apple */

const appleSpeaker = document.getElementById('apple-speaker');
const apple = document.getElementById('apple');
const appleTranslator = document.getElementById('apple-translator');
const appleGeorgianName = document.querySelector('.apple-georgian-description');
const appleEnglishName = document.querySelector('.apple-english-description');


appleSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(appleGeorgianName).display == 'none') {
        apple.play();
    } else {
        appleGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        appleGeorgianName.style.color = 'white';
        appleGeorgianName.style.backgroundColor = '#e9185f';
        appleGeorgianName.style.borderRadius = '10px';
        appleGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            appleGeorgianName.innerText = 'ვაშლი';
            appleGeorgianName.style.color = 'var(--blue)';
            appleGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

appleTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(appleGeorgianName).display == 'block') {
        appleSpeaker.style.opacity = '1';
        appleGeorgianName.style.display = 'none';
        appleEnglishName.style.display = 'block';
    } else {
        appleSpeaker.style.opacity = '0.2';
        appleEnglishName.style.display = 'none';
        appleGeorgianName.style.display = 'block';
    }
});

/* for apple */


/* for banana */

const bananaSpeaker = document.getElementById('banana-speaker');
const banana = document.getElementById('banana');
const bananaTranslator = document.getElementById('banana-translator');
const bananaGeorgianName = document.querySelector('.banana-georgian-description');
const bananaEnglishName = document.querySelector('.banana-english-description');


bananaSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(bananaGeorgianName).display == 'none') {
        banana.play();
    } else {
        bananaGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        bananaGeorgianName.style.color = 'white';
        bananaGeorgianName.style.backgroundColor = '#e9185f';
        bananaGeorgianName.style.borderRadius = '10px';
        bananaGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            bananaGeorgianName.innerText = 'ბანანი';
            bananaGeorgianName.style.color = 'var(--blue)';
            bananaGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

bananaTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(bananaGeorgianName).display == 'block') {
        bananaSpeaker.style.opacity = '1';
        bananaGeorgianName.style.display = 'none';
        bananaEnglishName.style.display = 'block';
    } else {
        bananaSpeaker.style.opacity = '0.2';
        bananaEnglishName.style.display = 'none';
        bananaGeorgianName.style.display = 'block';
    }
});

/* for banana */


/* for orange */

const orangeSpeaker = document.getElementById('orange-speaker');
const orange = document.getElementById('orange');
const orangeTranslator = document.getElementById('orange-translator');
const orangeGeorgianName = document.querySelector('.orange-georgian-description');
const orangeEnglishName = document.querySelector('.orange-english-description');


orangeSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(orangeGeorgianName).display == 'none') {
        orange.play();
    } else {
        orangeGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        orangeGeorgianName.style.color = 'white';
        orangeGeorgianName.style.backgroundColor = '#e9185f';
        orangeGeorgianName.style.borderRadius = '10px';
        orangeGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            orangeGeorgianName.innerText = 'ფორთოხალი';
            orangeGeorgianName.style.color = 'var(--blue)';
            orangeGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

orangeTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(orangeGeorgianName).display == 'block') {
        orangeSpeaker.style.opacity = '1';
        orangeGeorgianName.style.display = 'none';
        orangeEnglishName.style.display = 'block';
    } else {
        orangeSpeaker.style.opacity = '0.2';
        orangeEnglishName.style.display = 'none';
        orangeGeorgianName.style.display = 'block';
    }
});

/* for orange */


/* for pineapple */

const pineappleSpeaker = document.getElementById('pineapple-speaker');
const pineapple = document.getElementById('pineapple');
const pineappleTranslator = document.getElementById('pineapple-translator');
const pineappleGeorgianName = document.querySelector('.pineapple-georgian-description');
const pineappleEnglishName = document.querySelector('.pineapple-english-description');


pineappleSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(pineappleGeorgianName).display == 'none') {
        pineapple.play();
    } else {
        pineappleGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        pineappleGeorgianName.style.color = 'white';
        pineappleGeorgianName.style.backgroundColor = '#e9185f';
        pineappleGeorgianName.style.borderRadius = '10px';
        pineappleGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            pineappleGeorgianName.innerText = 'ანანასი';
            pineappleGeorgianName.style.color = 'var(--blue)';
            pineappleGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

pineappleTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(pineappleGeorgianName).display == 'block') {
        pineappleSpeaker.style.opacity = '1';
        pineappleGeorgianName.style.display = 'none';
        pineappleEnglishName.style.display = 'block';
    } else {
        pineappleSpeaker.style.opacity = '0.2';
        pineappleEnglishName.style.display = 'none';
        pineappleGeorgianName.style.display = 'block';
    }
});

/* for pineapple */


/* for grapes */

const grapesSpeaker = document.getElementById('grapes-speaker');
const grapes = document.getElementById('grapes');
const grapesTranslator = document.getElementById('grapes-translator');
const grapesGeorgianName = document.querySelector('.grapes-georgian-description');
const grapesEnglishName = document.querySelector('.grapes-english-description');


grapesSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(grapesGeorgianName).display == 'none') {
        grapes.play();
    } else {
        grapesGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        grapesGeorgianName.style.color = 'white';
        grapesGeorgianName.style.backgroundColor = '#e9185f';
        grapesGeorgianName.style.borderRadius = '10px';
        grapesGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            grapesGeorgianName.innerText = 'ყურძენი';
            grapesGeorgianName.style.color = 'var(--blue)';
            grapesGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

grapesTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(grapesGeorgianName).display == 'block') {
        grapesSpeaker.style.opacity = '1';
        grapesGeorgianName.style.display = 'none';
        grapesEnglishName.style.display = 'block';
    } else {
        grapesSpeaker.style.opacity = '0.2';
        grapesEnglishName.style.display = 'none';
        grapesGeorgianName.style.display = 'block';
    }
});

/* for grapes */


/* for watermelon */

const watermelonSpeaker = document.getElementById('watermelon-speaker');
const watermelon = document.getElementById('watermelon');
const watermelonTranslator = document.getElementById('watermelon-translator');
const watermelonGeorgianName = document.querySelector('.watermelon-georgian-description');
const watermelonEnglishName = document.querySelector('.watermelon-english-description');


watermelonSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(watermelonGeorgianName).display == 'none') {
        watermelon.play();
    } else {
        watermelonGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        watermelonGeorgianName.style.color = 'white';
        watermelonGeorgianName.style.backgroundColor = '#e9185f';
        watermelonGeorgianName.style.borderRadius = '10px';
        watermelonGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            watermelonGeorgianName.innerText = 'საზამთრო';
            watermelonGeorgianName.style.color = 'var(--blue)';
            watermelonGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

watermelonTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(watermelonGeorgianName).display == 'block') {
        watermelonSpeaker.style.opacity = '1';
        watermelonGeorgianName.style.display = 'none';
        watermelonEnglishName.style.display = 'block';
    } else {
        watermelonSpeaker.style.opacity = '0.2';
        watermelonEnglishName.style.display = 'none';
        watermelonGeorgianName.style.display = 'block';
    }
});

/* for watermelon */


/* for pomegranate */

const pomegranateSpeaker = document.getElementById('pomegranate-speaker');
const pomegranate = document.getElementById('pomegranate');
const pomegranateTranslator = document.getElementById('pomegranate-translator');
const pomegranateGeorgianName = document.querySelector('.pomegranate-georgian-description');
const pomegranateEnglishName = document.querySelector('.pomegranate-english-description');


pomegranateSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(pomegranateGeorgianName).display == 'none') {
        pomegranate.play();
    } else {
        pomegranateGeorgianName.innerText = "ხილს ხმა არ აქვს!";
        pomegranateGeorgianName.style.color = 'white';
        pomegranateGeorgianName.style.backgroundColor = '#e9185f';
        pomegranateGeorgianName.style.borderRadius = '10px';
        pomegranateGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            pomegranateGeorgianName.innerText = 'ბროწეული';
            pomegranateGeorgianName.style.color = 'var(--blue)';
            pomegranateGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

pomegranateTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(pomegranateGeorgianName).display == 'block') {
        pomegranateSpeaker.style.opacity = '1';
        pomegranateGeorgianName.style.display = 'none';
        pomegranateEnglishName.style.display = 'block';
    } else {
        pomegranateSpeaker.style.opacity = '0.2';
        pomegranateEnglishName.style.display = 'none';
        pomegranateGeorgianName.style.display = 'block';
    }
});

/* for pomegranate */





