/* for skirt */

const skirtSpeaker = document.getElementById('skirt-speaker');
const skirt = document.getElementById('skirt');
const skirtTranslator = document.getElementById('skirt-translator');
const skirtGeorgianName = document.querySelector('.skirt-georgian-description');
const skirtEnglishName = document.querySelector('.skirt-english-description');
const skirtFooter = document.querySelector('.card-footer.skirt');
const skirtCard = document.querySelector('.skirt')


skirtSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(skirtGeorgianName).display == 'none') {
        skirt.play();
    } else {
        skirtGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        skirtGeorgianName.style.color = 'white';
        skirtGeorgianName.style.backgroundColor = '#e9185f';
        skirtGeorgianName.style.borderRadius = '10px';
        skirtGeorgianName.style.paddingInline = '5px';
        skirtGeorgianName.style.display = 'flex';
        skirtGeorgianName.style.textAlign = 'center';
        skirtCard.style.height = '300px';
        skirtFooter.style.height = '50px';
        setTimeout(() => {
            skirtGeorgianName.innerText = 'ქვედაბოლო';
            skirtGeorgianName.style.color = 'var(--blue)';
            skirtGeorgianName.style.backgroundColor = 'initial';
            skirtFooter.style.height = 'initial';
            skirtCard.style.height = 'initial';
        }, 2000);
    }
});

skirtTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(skirtGeorgianName).display == 'block') {
        skirtSpeaker.style.opacity = '1';
        skirtGeorgianName.style.display = 'none';
        skirtEnglishName.style.display = 'block';
    } else {
        skirtSpeaker.style.opacity = '0.2';
        skirtEnglishName.style.display = 'none';
        skirtGeorgianName.style.display = 'block';
    }
});

/* for skirt */


/* for sweater */

const sweaterSpeaker = document.getElementById('sweater-speaker');
const sweater = document.getElementById('sweater');
const sweaterTranslator = document.getElementById('sweater-translator');
const sweaterGeorgianName = document.querySelector('.sweater-georgian-description');
const sweaterEnglishName = document.querySelector('.sweater-english-description');
const sweaterFooter = document.querySelector('.card-footer.sweater');
const sweaterCard = document.querySelector('.sweater')


sweaterSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(sweaterGeorgianName).display == 'none') {
        sweater.play();
    } else {
        sweaterGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        sweaterGeorgianName.style.color = 'white';
        sweaterGeorgianName.style.backgroundColor = '#e9185f';
        sweaterGeorgianName.style.borderRadius = '10px';
        sweaterGeorgianName.style.paddingInline = '5px';
        sweaterGeorgianName.style.display = 'flex';
        sweaterGeorgianName.style.textAlign = 'center';
        sweaterCard.style.height = '300px';
        sweaterFooter.style.height = '50px';
        setTimeout(() => {
            sweaterGeorgianName.innerText = 'ჯემპრი';
            sweaterGeorgianName.style.color = 'var(--blue)';
            sweaterGeorgianName.style.backgroundColor = 'initial';
            sweaterFooter.style.height = 'initial';
            sweaterCard.style.height = 'initial';
        }, 2000);
    }
});

sweaterTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(sweaterGeorgianName).display == 'block') {
        sweaterSpeaker.style.opacity = '1';
        sweaterGeorgianName.style.display = 'none';
        sweaterEnglishName.style.display = 'block';
    } else {
        sweaterSpeaker.style.opacity = '0.2';
        sweaterEnglishName.style.display = 'none';
        sweaterGeorgianName.style.display = 'block';
    }
});

/* for sweater */


/* for t-shirt */

const tshirtSpeaker = document.getElementById('t-shirt-speaker');
const tshirt = document.getElementById('t-shirt');
const tshirtTranslator = document.getElementById('t-shirt-translator');
const tshirtGeorgianName = document.querySelector('.t-shirt-georgian-description');
const tshirtEnglishName = document.querySelector('.t-shirt-english-description');
const tshirtFooter = document.querySelector('.card-footer.t-shirt');
const tshirtCard = document.querySelector('.tshirt')


tshirtSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(tshirtGeorgianName).display == 'none') {
        tshirt.play();
    } else {
        tshirtGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        tshirtGeorgianName.style.color = 'white';
        tshirtGeorgianName.style.backgroundColor = '#e9185f';
        tshirtGeorgianName.style.borderRadius = '10px';
        tshirtGeorgianName.style.paddingInline = '5px';
        tshirtGeorgianName.style.display = 'flex';
        tshirtGeorgianName.style.textAlign = 'center';
        tshirtCard.style.height = '300px';
        tshirtFooter.style.height = '50px';
        setTimeout(() => {
            tshirtGeorgianName.innerText = 'მაისური';
            tshirtGeorgianName.style.color = 'var(--blue)';
            tshirtGeorgianName.style.backgroundColor = 'initial';
            tshirtFooter.style.height = 'initial';
            tshirtCard.style.height = 'initial';
        }, 2000);
    }
});

tshirtTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(tshirtGeorgianName).display == 'block') {
        tshirtSpeaker.style.opacity = '1';
        tshirtGeorgianName.style.display = 'none';
        tshirtEnglishName.style.display = 'block';
    } else {
        tshirtSpeaker.style.opacity = '0.2';
        tshirtEnglishName.style.display = 'none';
        tshirtGeorgianName.style.display = 'block';
    }
});

/* for t-shirt */


/* for shoes */

const shoesSpeaker = document.getElementById('shoes-speaker');
const shoes = document.getElementById('shoes');
const shoesTranslator = document.getElementById('shoes-translator');
const shoesGeorgianName = document.querySelector('.shoes-georgian-description');
const shoesEnglishName = document.querySelector('.shoes-english-description');
const shoesFooter = document.querySelector('.card-footer.shoes');
const shoesCard = document.querySelector('.shoes')


shoesSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(shoesGeorgianName).display == 'none') {
        shoes.play();
    } else {
        shoesGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        shoesGeorgianName.style.color = 'white';
        shoesGeorgianName.style.backgroundColor = '#e9185f';
        shoesGeorgianName.style.borderRadius = '10px';
        shoesGeorgianName.style.paddingInline = '5px';
        shoesGeorgianName.style.display = 'flex';
        shoesGeorgianName.style.textAlign = 'center';
        shoesCard.style.height = '300px';
        shoesFooter.style.height = '50px';
        setTimeout(() => {
            shoesGeorgianName.innerText = 'ფეხსაცმელი';
            shoesGeorgianName.style.color = 'var(--blue)';
            shoesGeorgianName.style.backgroundColor = 'initial';
            shoesFooter.style.height = 'initial';
            shoesCard.style.height = 'initial';
        }, 2000);
    }
});

shoesTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(shoesGeorgianName).display == 'block') {
        shoesSpeaker.style.opacity = '1';
        shoesGeorgianName.style.display = 'none';
        shoesEnglishName.style.display = 'block';
    } else {
        shoesSpeaker.style.opacity = '0.2';
        shoesEnglishName.style.display = 'none';
        shoesGeorgianName.style.display = 'block';
    }
});

/* for shoes */


/* for pants */

const pantsSpeaker = document.getElementById('pants-speaker');
const pants = document.getElementById('pants');
const pantsTranslator = document.getElementById('pants-translator');
const pantsGeorgianName = document.querySelector('.pants-georgian-description');
const pantsEnglishName = document.querySelector('.pants-english-description');
const pantsFooter = document.querySelector('.card-footer.pants');
const pantsCard = document.querySelector('.pants')


pantsSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(pantsGeorgianName).display == 'none') {
        pants.play();
    } else {
        pantsGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        pantsGeorgianName.style.color = 'white';
        pantsGeorgianName.style.backgroundColor = '#e9185f';
        pantsGeorgianName.style.borderRadius = '10px';
        pantsGeorgianName.style.paddingInline = '5px';
        pantsGeorgianName.style.display = 'flex';
        pantsGeorgianName.style.textAlign = 'center';
        pantsCard.style.height = '300px';
        pantsFooter.style.height = '50px';
        setTimeout(() => {
            pantsGeorgianName.innerText = 'შარვალი';
            pantsGeorgianName.style.color = 'var(--blue)';
            pantsGeorgianName.style.backgroundColor = 'initial';
            pantsFooter.style.height = 'initial';
            pantsCard.style.height = 'initial';
        }, 2000);
    }
});

pantsTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(pantsGeorgianName).display == 'block') {
        pantsSpeaker.style.opacity = '1';
        pantsGeorgianName.style.display = 'none';
        pantsEnglishName.style.display = 'block';
    } else {
        pantsSpeaker.style.opacity = '0.2';
        pantsEnglishName.style.display = 'none';
        pantsGeorgianName.style.display = 'block';
    }
});

/* for pants */


/* for shorts */

const shortsSpeaker = document.getElementById('shorts-speaker');
const shorts = document.getElementById('shorts');
const shortsTranslator = document.getElementById('shorts-translator');
const shortsGeorgianName = document.querySelector('.shorts-georgian-description');
const shortsEnglishName = document.querySelector('.shorts-english-description');
const shortsFooter = document.querySelector('.card-footer.shorts');
const shortsCard = document.querySelector('.shorts')


shortsSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(shortsGeorgianName).display == 'none') {
        shorts.play();
    } else {
        shortsGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        shortsGeorgianName.style.color = 'white';
        shortsGeorgianName.style.backgroundColor = '#e9185f';
        shortsGeorgianName.style.borderRadius = '10px';
        shortsGeorgianName.style.paddingInline = '5px';
        shortsGeorgianName.style.display = 'flex';
        shortsGeorgianName.style.textAlign = 'center';
        shortsCard.style.height = '300px';
        shortsFooter.style.height = '50px';
        setTimeout(() => {
            shortsGeorgianName.innerText = 'შორტი';
            shortsGeorgianName.style.color = 'var(--blue)';
            shortsGeorgianName.style.backgroundColor = 'initial';
            shortsFooter.style.height = 'initial';
            shortsCard.style.height = 'initial';
        }, 2000);
    }
});

shortsTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(shortsGeorgianName).display == 'block') {
        shortsSpeaker.style.opacity = '1';
        shortsGeorgianName.style.display = 'none';
        shortsEnglishName.style.display = 'block';
    } else {
        shortsSpeaker.style.opacity = '0.2';
        shortsEnglishName.style.display = 'none';
        shortsGeorgianName.style.display = 'block';
    }
});

/* for shorts */


/* for gloves */

const glovesSpeaker = document.getElementById('gloves-speaker');
const gloves = document.getElementById('gloves');
const glovesTranslator = document.getElementById('gloves-translator');
const glovesGeorgianName = document.querySelector('.gloves-georgian-description');
const glovesEnglishName = document.querySelector('.gloves-english-description');
const glovesFooter = document.querySelector('.card-footer.gloves');
const glovesCard = document.querySelector('.gloves')


glovesSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(glovesGeorgianName).display == 'none') {
        gloves.play();
    } else {
        glovesGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        glovesGeorgianName.style.color = 'white';
        glovesGeorgianName.style.backgroundColor = '#e9185f';
        glovesGeorgianName.style.borderRadius = '10px';
        glovesGeorgianName.style.paddingInline = '5px';
        glovesGeorgianName.style.display = 'flex';
        glovesGeorgianName.style.textAlign = 'center';
        glovesCard.style.height = '300px';
        glovesFooter.style.height = '50px';
        setTimeout(() => {
            glovesGeorgianName.innerText = 'ხელთათმანები';
            glovesGeorgianName.style.color = 'var(--blue)';
            glovesGeorgianName.style.backgroundColor = 'initial';
            glovesFooter.style.height = 'initial';
            glovesCard.style.height = 'initial';
        }, 2000);
    }
});

glovesTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(glovesGeorgianName).display == 'block') {
        glovesSpeaker.style.opacity = '1';
        glovesGeorgianName.style.display = 'none';
        glovesEnglishName.style.display = 'block';
    } else {
        glovesSpeaker.style.opacity = '0.2';
        glovesEnglishName.style.display = 'none';
        glovesGeorgianName.style.display = 'block';
    }
});

/* for gloves */


/* for socks */

const socksSpeaker = document.getElementById('socks-speaker');
const socks = document.getElementById('socks');
const socksTranslator = document.getElementById('socks-translator');
const socksGeorgianName = document.querySelector('.socks-georgian-description');
const socksEnglishName = document.querySelector('.socks-english-description');
const socksFooter = document.querySelector('.card-footer.socks');
const socksCard = document.querySelector('.socks')


socksSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(socksGeorgianName).display == 'none') {
        socks.play();
    } else {
        socksGeorgianName.innerText = "ტანსაცმელს ხმა არ აქვს!";
        socksGeorgianName.style.color = 'white';
        socksGeorgianName.style.backgroundColor = '#e9185f';
        socksGeorgianName.style.borderRadius = '10px';
        socksGeorgianName.style.paddingInline = '5px';
        socksGeorgianName.style.display = 'flex';
        socksGeorgianName.style.textAlign = 'center';
        socksCard.style.height = '300px';
        socksFooter.style.height = '50px';
        setTimeout(() => {
            socksGeorgianName.innerText = 'წინდები';
            socksGeorgianName.style.color = 'var(--blue)';
            socksGeorgianName.style.backgroundColor = 'initial';
            socksFooter.style.height = 'initial';
            socksCard.style.height = 'initial';
        }, 2000);
    }
});

socksTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(socksGeorgianName).display == 'block') {
        socksSpeaker.style.opacity = '1';
        socksGeorgianName.style.display = 'none';
        socksEnglishName.style.display = 'block';
    } else {
        socksSpeaker.style.opacity = '0.2';
        socksEnglishName.style.display = 'none';
        socksGeorgianName.style.display = 'block';
    }
});

/* for socks */