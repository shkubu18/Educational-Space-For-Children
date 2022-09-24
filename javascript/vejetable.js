/* for tomato */

const tomatoSpeaker = document.getElementById('tomato-speaker');
const tomato = document.getElementById('tomato');
const tomatoTranslator = document.getElementById('tomato-translator');
const tomatoGeorgianName = document.querySelector('.tomato-georgian-description');
const tomatoEnglishName = document.querySelector('.tomato-english-description');
const tomatoFooter = document.querySelector('.card-footer.tomato');
const tomatoCard = document.querySelector('.tomato')


tomatoSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(tomatoGeorgianName).display == 'none') {
        tomato.play();
    } else {
        tomatoGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        tomatoGeorgianName.style.color = 'white';
        tomatoGeorgianName.style.backgroundColor = '#e9185f';
        tomatoGeorgianName.style.borderRadius = '10px';
        tomatoGeorgianName.style.paddingInline = '5px';
        tomatoGeorgianName.style.display = 'flex';
        tomatoGeorgianName.style.textAlign = 'center';
        tomatoCard.style.height = '300px';
        tomatoFooter.style.height = '50px';
        setTimeout(() => {
            tomatoGeorgianName.innerText = 'პომიდორი';
            tomatoGeorgianName.style.color = 'var(--blue)';
            tomatoGeorgianName.style.backgroundColor = 'initial';
            tomatoFooter.style.height = 'initial';
            tomatoCard.style.height = 'initial';
        }, 2000);
    }
});

tomatoTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(tomatoGeorgianName).display == 'block') {
        tomatoSpeaker.style.opacity = '1';
        tomatoGeorgianName.style.display = 'none';
        tomatoEnglishName.style.display = 'block';
    } else {
        tomatoSpeaker.style.opacity = '0.2';
        tomatoEnglishName.style.display = 'none';
        tomatoGeorgianName.style.display = 'block';
    }
});

/* for tomato */


/* for potato */

const potatoSpeaker = document.getElementById('potato-speaker');
const potato = document.getElementById('potato');
const potatoTranslator = document.getElementById('potato-translator');
const potatoGeorgianName = document.querySelector('.potato-georgian-description');
const potatoEnglishName = document.querySelector('.potato-english-description');
const potatoFooter = document.querySelector('.card-footer.potato');
const potatoCard = document.querySelector('.potato')


potatoSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(potatoGeorgianName).display == 'none') {
        potato.play();
    } else {
        potatoGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        potatoGeorgianName.style.color = 'white';
        potatoGeorgianName.style.backgroundColor = '#e9185f';
        potatoGeorgianName.style.borderRadius = '10px';
        potatoGeorgianName.style.paddingInline = '5px';
        potatoGeorgianName.style.display = 'flex';
        potatoGeorgianName.style.textAlign = 'center';
        potatoCard.style.height = '300px';
        potatoFooter.style.height = '50px';
        setTimeout(() => {
            potatoGeorgianName.innerText = 'კარტოფილი';
            potatoGeorgianName.style.color = 'var(--blue)';
            potatoGeorgianName.style.backgroundColor = 'initial';
            potatoFooter.style.height = 'initial';
            potatoCard.style.height = 'initial';
        }, 2000);
    }
});

potatoTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(potatoGeorgianName).display == 'block') {
        potatoSpeaker.style.opacity = '1';
        potatoGeorgianName.style.display = 'none';
        potatoEnglishName.style.display = 'block';
    } else {
        potatoSpeaker.style.opacity = '0.2';
        potatoEnglishName.style.display = 'none';
        potatoGeorgianName.style.display = 'block';
    }
});

/* for potato */


/* for cucumber */

const cucumberSpeaker = document.getElementById('cucumber-speaker');
const cucumber = document.getElementById('cucumber');
const cucumberTranslator = document.getElementById('cucumber-translator');
const cucumberGeorgianName = document.querySelector('.cucumber-georgian-description');
const cucumberEnglishName = document.querySelector('.cucumber-english-description');
const cucumberFooter = document.querySelector('.card-footer.cucumber');
const cucumberCard = document.querySelector('.cucumber')


cucumberSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(cucumberGeorgianName).display == 'none') {
        cucumber.play();
    } else {
        cucumberGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        cucumberGeorgianName.style.color = 'white';
        cucumberGeorgianName.style.backgroundColor = '#e9185f';
        cucumberGeorgianName.style.borderRadius = '10px';
        cucumberGeorgianName.style.paddingInline = '5px';
        cucumberGeorgianName.style.display = 'flex';
        cucumberGeorgianName.style.textAlign = 'center';
        cucumberCard.style.height = '300px';
        cucumberFooter.style.height = '50px';
        setTimeout(() => {
            cucumberGeorgianName.innerText = 'კარტოფილი';
            cucumberGeorgianName.style.color = 'var(--blue)';
            cucumberGeorgianName.style.backgroundColor = 'initial';
            cucumberFooter.style.height = 'initial';
            cucumberCard.style.height = 'initial';
        }, 2000);
    }
});

cucumberTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(cucumberGeorgianName).display == 'block') {
        cucumberSpeaker.style.opacity = '1';
        cucumberGeorgianName.style.display = 'none';
        cucumberEnglishName.style.display = 'block';
    } else {
        cucumberSpeaker.style.opacity = '0.2';
        cucumberEnglishName.style.display = 'none';
        cucumberGeorgianName.style.display = 'block';
    }
});

/* for cucumber */


/* for carrot */

const carrotSpeaker = document.getElementById('carrot-speaker');
const carrot = document.getElementById('carrot');
const carrotTranslator = document.getElementById('carrot-translator');
const carrotGeorgianName = document.querySelector('.carrot-georgian-description');
const carrotEnglishName = document.querySelector('.carrot-english-description');
const carrotFooter = document.querySelector('.card-footer.carrot');
const carrotCard = document.querySelector('.carrot')


carrotSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(carrotGeorgianName).display == 'none') {
        carrot.play();
    } else {
        carrotGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        carrotGeorgianName.style.color = 'white';
        carrotGeorgianName.style.backgroundColor = '#e9185f';
        carrotGeorgianName.style.borderRadius = '10px';
        carrotGeorgianName.style.paddingInline = '5px';
        carrotGeorgianName.style.display = 'flex';
        carrotGeorgianName.style.textAlign = 'center';
        carrotCard.style.height = '300px';
        carrotFooter.style.height = '50px';
        setTimeout(() => {
            carrotGeorgianName.innerText = 'კარტოფილი';
            carrotGeorgianName.style.color = 'var(--blue)';
            carrotGeorgianName.style.backgroundColor = 'initial';
            carrotFooter.style.height = 'initial';
            carrotCard.style.height = 'initial';
        }, 2000);
    }
});

carrotTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(carrotGeorgianName).display == 'block') {
        carrotSpeaker.style.opacity = '1';
        carrotGeorgianName.style.display = 'none';
        carrotEnglishName.style.display = 'block';
    } else {
        carrotSpeaker.style.opacity = '0.2';
        carrotEnglishName.style.display = 'none';
        carrotGeorgianName.style.display = 'block';
    }
});

/* for carrot */


/* for cabbage */

const cabbageSpeaker = document.getElementById('cabbage-speaker');
const cabbage = document.getElementById('cabbage');
const cabbageTranslator = document.getElementById('cabbage-translator');
const cabbageGeorgianName = document.querySelector('.cabbage-georgian-description');
const cabbageEnglishName = document.querySelector('.cabbage-english-description');
const cabbageFooter = document.querySelector('.card-footer.cabbage');
const cabbageCard = document.querySelector('.cabbage')


cabbageSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(cabbageGeorgianName).display == 'none') {
        cabbage.play();
    } else {
        cabbageGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        cabbageGeorgianName.style.color = 'white';
        cabbageGeorgianName.style.backgroundColor = '#e9185f';
        cabbageGeorgianName.style.borderRadius = '10px';
        cabbageGeorgianName.style.paddingInline = '5px';
        cabbageGeorgianName.style.display = 'flex';
        cabbageGeorgianName.style.textAlign = 'center';
        cabbageCard.style.height = '300px';
        cabbageFooter.style.height = '50px';
        setTimeout(() => {
            cabbageGeorgianName.innerText = 'კარტოფილი';
            cabbageGeorgianName.style.color = 'var(--blue)';
            cabbageGeorgianName.style.backgroundColor = 'initial';
            cabbageFooter.style.height = 'initial';
            cabbageCard.style.height = 'initial';
        }, 2000);
    }
});

cabbageTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(cabbageGeorgianName).display == 'block') {
        cabbageSpeaker.style.opacity = '1';
        cabbageGeorgianName.style.display = 'none';
        cabbageEnglishName.style.display = 'block';
    } else {
        cabbageSpeaker.style.opacity = '0.2';
        cabbageEnglishName.style.display = 'none';
        cabbageGeorgianName.style.display = 'block';
    }
});

/* for cabbage */


/* for corn */

const cornSpeaker = document.getElementById('corn-speaker');
const corn = document.getElementById('corn');
const cornTranslator = document.getElementById('corn-translator');
const cornGeorgianName = document.querySelector('.corn-georgian-description');
const cornEnglishName = document.querySelector('.corn-english-description');
const cornFooter = document.querySelector('.card-footer.corn');
const cornCard = document.querySelector('.corn')


cornSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(cornGeorgianName).display == 'none') {
        corn.play();
    } else {
        cornGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        cornGeorgianName.style.color = 'white';
        cornGeorgianName.style.backgroundColor = '#e9185f';
        cornGeorgianName.style.borderRadius = '10px';
        cornGeorgianName.style.paddingInline = '5px';
        cornGeorgianName.style.display = 'flex';
        cornGeorgianName.style.textAlign = 'center';
        cornCard.style.height = '300px';
        cornFooter.style.height = '50px';
        setTimeout(() => {
            cornGeorgianName.innerText = 'კარტოფილი';
            cornGeorgianName.style.color = 'var(--blue)';
            cornGeorgianName.style.backgroundColor = 'initial';
            cornFooter.style.height = 'initial';
            cornCard.style.height = 'initial';
        }, 2000);
    }
});

cornTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(cornGeorgianName).display == 'block') {
        cornSpeaker.style.opacity = '1';
        cornGeorgianName.style.display = 'none';
        cornEnglishName.style.display = 'block';
    } else {
        cornSpeaker.style.opacity = '0.2';
        cornEnglishName.style.display = 'none';
        cornGeorgianName.style.display = 'block';
    }
});

/* for corn */


/* for broccoli */

const broccoliSpeaker = document.getElementById('broccoli-speaker');
const broccoli = document.getElementById('broccoli');
const broccoliTranslator = document.getElementById('broccoli-translator');
const broccoliGeorgianName = document.querySelector('.broccoli-georgian-description');
const broccoliEnglishName = document.querySelector('.broccoli-english-description');
const broccoliFooter = document.querySelector('.card-footer.broccoli');
const broccoliCard = document.querySelector('.broccoli')


broccoliSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(broccoliGeorgianName).display == 'none') {
        broccoli.play();
    } else {
        broccoliGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        broccoliGeorgianName.style.color = 'white';
        broccoliGeorgianName.style.backgroundColor = '#e9185f';
        broccoliGeorgianName.style.borderRadius = '10px';
        broccoliGeorgianName.style.paddingInline = '5px';
        broccoliGeorgianName.style.display = 'flex';
        broccoliGeorgianName.style.textAlign = 'center';
        broccoliCard.style.height = '300px';
        broccoliFooter.style.height = '50px';
        setTimeout(() => {
            broccoliGeorgianName.innerText = 'კარტოფილი';
            broccoliGeorgianName.style.color = 'var(--blue)';
            broccoliGeorgianName.style.backgroundColor = 'initial';
            broccoliFooter.style.height = 'initial';
            broccoliCard.style.height = 'initial';
        }, 2000);
    }
});

broccoliTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(broccoliGeorgianName).display == 'block') {
        broccoliSpeaker.style.opacity = '1';
        broccoliGeorgianName.style.display = 'none';
        broccoliEnglishName.style.display = 'block';
    } else {
        broccoliSpeaker.style.opacity = '0.2';
        broccoliEnglishName.style.display = 'none';
        broccoliGeorgianName.style.display = 'block';
    }
});

/* for broccoli */


/* for mushroom */

const mushroomSpeaker = document.getElementById('mushroom-speaker');
const mushroom = document.getElementById('mushroom');
const mushroomTranslator = document.getElementById('mushroom-translator');
const mushroomGeorgianName = document.querySelector('.mushroom-georgian-description');
const mushroomEnglishName = document.querySelector('.mushroom-english-description');
const mushroomFooter = document.querySelector('.card-footer.mushroom');
const mushroomCard = document.querySelector('.mushroom')


mushroomSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(mushroomGeorgianName).display == 'none') {
        mushroom.play();
    } else {
        mushroomGeorgianName.innerText = "ბოსტნეულს ხმა არ აქვს!";
        mushroomGeorgianName.style.color = 'white';
        mushroomGeorgianName.style.backgroundColor = '#e9185f';
        mushroomGeorgianName.style.borderRadius = '10px';
        mushroomGeorgianName.style.paddingInline = '5px';
        mushroomGeorgianName.style.display = 'flex';
        mushroomGeorgianName.style.textAlign = 'center';
        mushroomCard.style.height = '300px';
        mushroomFooter.style.height = '50px';
        setTimeout(() => {
            mushroomGeorgianName.innerText = 'კარტოფილი';
            mushroomGeorgianName.style.color = 'var(--blue)';
            mushroomGeorgianName.style.backgroundColor = 'initial';
            mushroomFooter.style.height = 'initial';
            mushroomCard.style.height = 'initial';
        }, 2000);
    }
});

mushroomTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(mushroomGeorgianName).display == 'block') {
        mushroomSpeaker.style.opacity = '1';
        mushroomGeorgianName.style.display = 'none';
        mushroomEnglishName.style.display = 'block';
    } else {
        mushroomSpeaker.style.opacity = '0.2';
        mushroomEnglishName.style.display = 'none';
        mushroomGeorgianName.style.display = 'block';
    }
});

/* for mushroom */

