/* for forest */

const forestSpeaker = document.getElementById('forest-speaker');
const forest = document.getElementById('forest');
const forestTranslator = document.getElementById('forest-translator');
const forestGeorgianName = document.querySelector('.forest-georgian-description');
const forestEnglishName = document.querySelector('.forest-english-description');


forestSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(forestGeorgianName).display == 'none') {
        forest.play();
    } else {
        forestGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        forestGeorgianName.style.color = 'white';
        forestGeorgianName.style.backgroundColor = '#e9185f';
        forestGeorgianName.style.borderRadius = '10px';
        forestGeorgianName.style.paddingInline = '5px';
        forestGeorgianName.style.display = 'flex';
        forestGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            forestGeorgianName.innerText = 'ტყე';
            forestGeorgianName.style.color = 'var(--blue)';
            forestGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

forestTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(forestGeorgianName).display == 'block') {
        forestSpeaker.style.opacity = '1';
        forestGeorgianName.style.display = 'none';
        forestEnglishName.style.display = 'block';
    } else {
        forestSpeaker.style.opacity = '0.2';
        forestEnglishName.style.display = 'none';
        forestGeorgianName.style.display = 'block';
    }
});

/* for forest */


/* for beach */

const beachSpeaker = document.getElementById('beach-speaker');
const beach = document.getElementById('beach');
const beachTranslator = document.getElementById('beach-translator');
const beachGeorgianName = document.querySelector('.beach-georgian-description');
const beachEnglishName = document.querySelector('.beach-english-description');


beachSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(beachGeorgianName).display == 'none') {
        beach.play();
    } else {
        beachGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        beachGeorgianName.style.color = 'white';
        beachGeorgianName.style.backgroundColor = '#e9185f';
        beachGeorgianName.style.borderRadius = '10px';
        beachGeorgianName.style.paddingInline = '5px';
        beachGeorgianName.style.display = 'flex';
        beachGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            beachGeorgianName.innerText = 'სანაპირო';
            beachGeorgianName.style.color = 'var(--blue)';
            beachGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

beachTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(beachGeorgianName).display == 'block') {
        beachSpeaker.style.opacity = '1';
        beachGeorgianName.style.display = 'none';
        beachEnglishName.style.display = 'block';
    } else {
        beachSpeaker.style.opacity = '0.2';
        beachEnglishName.style.display = 'none';
        beachGeorgianName.style.display = 'block';
    }
});

/* for beach */


/* for mountain */

const mountainSpeaker = document.getElementById('mountain-speaker');
const mountain = document.getElementById('mountain');
const mountainTranslator = document.getElementById('mountain-translator');
const mountainGeorgianName = document.querySelector('.mountain-georgian-description');
const mountainEnglishName = document.querySelector('.mountain-english-description');


mountainSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(mountainGeorgianName).display == 'none') {
        mountain.play();
    } else {
        mountainGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        mountainGeorgianName.style.color = 'white';
        mountainGeorgianName.style.backgroundColor = '#e9185f';
        mountainGeorgianName.style.borderRadius = '10px';
        mountainGeorgianName.style.paddingInline = '5px';
        mountainGeorgianName.style.display = 'flex';
        mountainGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            mountainGeorgianName.innerText = 'მთა';
            mountainGeorgianName.style.color = 'var(--blue)';
            mountainGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

mountainTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(mountainGeorgianName).display == 'block') {
        mountainSpeaker.style.opacity = '1';
        mountainGeorgianName.style.display = 'none';
        mountainEnglishName.style.display = 'block';
    } else {
        mountainSpeaker.style.opacity = '0.2';
        mountainEnglishName.style.display = 'none';
        mountainGeorgianName.style.display = 'block';
    }
});

/* for mountain */


/* for rainbow */

const rainbowSpeaker = document.getElementById('rainbow-speaker');
const rainbow = document.getElementById('rainbow');
const rainbowTranslator = document.getElementById('rainbow-translator');
const rainbowGeorgianName = document.querySelector('.rainbow-georgian-description');
const rainbowEnglishName = document.querySelector('.rainbow-english-description');


rainbowSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(rainbowGeorgianName).display == 'none') {
        rainbow.play();
    } else {
        rainbowGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        rainbowGeorgianName.style.color = 'white';
        rainbowGeorgianName.style.backgroundColor = '#e9185f';
        rainbowGeorgianName.style.borderRadius = '10px';
        rainbowGeorgianName.style.paddingInline = '5px';
        rainbowGeorgianName.style.display = 'flex';
        rainbowGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            rainbowGeorgianName.innerText = 'ცისარტყელა';
            rainbowGeorgianName.style.color = 'var(--blue)';
            rainbowGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

rainbowTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(rainbowGeorgianName).display == 'block') {
        rainbowSpeaker.style.opacity = '1';
        rainbowGeorgianName.style.display = 'none';
        rainbowEnglishName.style.display = 'block';
    } else {
        rainbowSpeaker.style.opacity = '0.2';
        rainbowEnglishName.style.display = 'none';
        rainbowGeorgianName.style.display = 'block';
    }
});

/* for rainbow */


/* for snow */

const snowSpeaker = document.getElementById('snow-speaker');
const snow = document.getElementById('snow');
const snowTranslator = document.getElementById('snow-translator');
const snowGeorgianName = document.querySelector('.snow-georgian-description');
const snowEnglishName = document.querySelector('.snow-english-description');


snowSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(snowGeorgianName).display == 'none') {
        snow.play();
    } else {
        snowGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        snowGeorgianName.style.color = 'white';
        snowGeorgianName.style.backgroundColor = '#e9185f';
        snowGeorgianName.style.borderRadius = '10px';
        snowGeorgianName.style.paddingInline = '5px';
        snowGeorgianName.style.display = 'flex';
        snowGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            snowGeorgianName.innerText = 'თოვლი';
            snowGeorgianName.style.color = 'var(--blue)';
            snowGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

snowTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(snowGeorgianName).display == 'block') {
        snowSpeaker.style.opacity = '1';
        snowGeorgianName.style.display = 'none';
        snowEnglishName.style.display = 'block';
    } else {
        snowSpeaker.style.opacity = '0.2';
        snowEnglishName.style.display = 'none';
        snowGeorgianName.style.display = 'block';
    }
});

/* for snow */


/* for grass */

const grassSpeaker = document.getElementById('grass-speaker');
const grass = document.getElementById('grass');
const grassTranslator = document.getElementById('grass-translator');
const grassGeorgianName = document.querySelector('.grass-georgian-description');
const grassEnglishName = document.querySelector('.grass-english-description');


grassSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(grassGeorgianName).display == 'none') {
        grass.play();
    } else {
        grassGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        grassGeorgianName.style.color = 'white';
        grassGeorgianName.style.backgroundColor = '#e9185f';
        grassGeorgianName.style.borderRadius = '10px';
        grassGeorgianName.style.paddingInline = '5px';
        grassGeorgianName.style.display = 'flex';
        grassGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            grassGeorgianName.innerText = 'ბალახი';
            grassGeorgianName.style.color = 'var(--blue)';
            grassGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

grassTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(grassGeorgianName).display == 'block') {
        grassSpeaker.style.opacity = '1';
        grassGeorgianName.style.display = 'none';
        grassEnglishName.style.display = 'block';
    } else {
        grassSpeaker.style.opacity = '0.2';
        grassEnglishName.style.display = 'none';
        grassGeorgianName.style.display = 'block';
    }
});

/* for grass */


/* for desert */

const desertSpeaker = document.getElementById('desert-speaker');
const desert = document.getElementById('desert');
const desertTranslator = document.getElementById('desert-translator');
const desertGeorgianName = document.querySelector('.desert-georgian-description');
const desertEnglishName = document.querySelector('.desert-english-description');


desertSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(desertGeorgianName).display == 'none') {
        desert.play();
    } else {
        desertGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        desertGeorgianName.style.color = 'white';
        desertGeorgianName.style.backgroundColor = '#e9185f';
        desertGeorgianName.style.borderRadius = '10px';
        desertGeorgianName.style.paddingInline = '5px';
        desertGeorgianName.style.display = 'flex';
        desertGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            desertGeorgianName.innerText = 'უდაბნო';
            desertGeorgianName.style.color = 'var(--blue)';
            desertGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

desertTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(desertGeorgianName).display == 'block') {
        desertSpeaker.style.opacity = '1';
        desertGeorgianName.style.display = 'none';
        desertEnglishName.style.display = 'block';
    } else {
        desertSpeaker.style.opacity = '0.2';
        desertEnglishName.style.display = 'none';
        desertGeorgianName.style.display = 'block';
    }
});

/* for desert */


/* for cloud */

const cloudSpeaker = document.getElementById('cloud-speaker');
const cloud = document.getElementById('cloud');
const cloudTranslator = document.getElementById('cloud-translator');
const cloudGeorgianName = document.querySelector('.cloud-georgian-description');
const cloudEnglishName = document.querySelector('.cloud-english-description');


cloudSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(cloudGeorgianName).display == 'none') {
        cloud.play();
    } else {
        cloudGeorgianName.innerText = "ბუნებას ხმა არ აქვს!";
        cloudGeorgianName.style.color = 'white';
        cloudGeorgianName.style.backgroundColor = '#e9185f';
        cloudGeorgianName.style.borderRadius = '10px';
        cloudGeorgianName.style.paddingInline = '5px';
        cloudGeorgianName.style.display = 'flex';
        cloudGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            cloudGeorgianName.innerText = 'ღრუბელი';
            cloudGeorgianName.style.color = 'var(--blue)';
            cloudGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

cloudTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(cloudGeorgianName).display == 'block') {
        cloudSpeaker.style.opacity = '1';
        cloudGeorgianName.style.display = 'none';
        cloudEnglishName.style.display = 'block';
    } else {
        cloudSpeaker.style.opacity = '0.2';
        cloudEnglishName.style.display = 'none';
        cloudGeorgianName.style.display = 'block';
    }
});

/* for cloud */