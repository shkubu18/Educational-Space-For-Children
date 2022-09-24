/* for road */

const roadSpeaker = document.getElementById('road-speaker');
const road = document.getElementById('road');
const roadTranslator = document.getElementById('road-translator');
const roadGeorgianName = document.querySelector('.road-georgian-description');
const roadEnglishName = document.querySelector('.road-english-description');


roadSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(roadGeorgianName).display == 'none') {
        road.play();
    } else {
        roadGeorgianName.innerText = "გზას ხმა არ აქვს!";
        roadGeorgianName.style.color = 'white';
        roadGeorgianName.style.backgroundColor = '#e9185f';
        roadGeorgianName.style.borderRadius = '10px';
        roadGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            roadGeorgianName.innerText = 'გზა';
            roadGeorgianName.style.color = 'var(--blue)';
            roadGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

roadTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(roadGeorgianName).display == 'block') {
        roadSpeaker.style.opacity = '1';
        roadGeorgianName.style.display = 'none';
        roadEnglishName.style.display = 'block';
    } else {
        roadSpeaker.style.opacity = '0.2';
        roadEnglishName.style.display = 'none';
        roadGeorgianName.style.display = 'block';
    }
});

/* for road */


/* for building */

const buildingSpeaker = document.getElementById('building-speaker');
const building = document.getElementById('building');
const buildingTranslator = document.getElementById('building-translator');
const buildingGeorgianName = document.querySelector('.building-georgian-description');
const buildingEnglishName = document.querySelector('.building-english-description');


buildingSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(buildingGeorgianName).display == 'none') {
        building.play();
    } else {
        buildingGeorgianName.innerText = "შენობას ხმა არ აქვს!";
        buildingGeorgianName.style.color = 'white';
        buildingGeorgianName.style.backgroundColor = '#e9185f';
        buildingGeorgianName.style.borderRadius = '10px';
        buildingGeorgianName.style.paddingInline = '5px';
        buildingGeorgianName.style.display = 'flex';
        buildingGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            buildingGeorgianName.innerText = 'შენობა';
            buildingGeorgianName.style.color = 'var(--blue)';
            buildingGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

buildingTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(buildingGeorgianName).display == 'block') {
        buildingSpeaker.style.opacity = '1';
        buildingGeorgianName.style.display = 'none';
        buildingEnglishName.style.display = 'block';
    } else {
        buildingSpeaker.style.opacity = '0.2';
        buildingEnglishName.style.display = 'none';
        buildingGeorgianName.style.display = 'block';
    }
});

/* for building */


/* for bus */

const busSpeaker = document.getElementById('bus-speaker');
const busSound = document.getElementById('bus-sound');
const bus = document.getElementById('bus');
const busTranslator = document.getElementById('bus-translator');
const busGeorgianName = document.querySelector('.bus-georgian-description');
const busEnglishName = document.querySelector('.bus-english-description');


busSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(busGeorgianName).display == 'block') {
        busSound.play();
    } else {
        bus.play();
    }
});

busTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(busGeorgianName).display == 'block') {
        busGeorgianName.style.display = 'none';
        busEnglishName.style.display = 'block';
    } else {
        busEnglishName.style.display = 'none';
        busGeorgianName.style.display = 'block';
    }
});

/* for bus */


/* for car */

const carSpeaker = document.getElementById('car-speaker');
const carSound = document.getElementById('car-sound');
const car = document.getElementById('car');
const carTranslator = document.getElementById('car-translator');
const carGeorgianName = document.querySelector('.car-georgian-description');
const carEnglishName = document.querySelector('.car-english-description');


carSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(carGeorgianName).display == 'block') {
        carSound.play();
    } else {
        car.play();
    }
});

carTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(carGeorgianName).display == 'block') {
        carGeorgianName.style.display = 'none';
        carEnglishName.style.display = 'block';
    } else {
        carEnglishName.style.display = 'none';
        carGeorgianName.style.display = 'block';
    }
});

/* for car */


/* for store */

const storeSpeaker = document.getElementById('store-speaker');
const store = document.getElementById('store');
const storeTranslator = document.getElementById('store-translator');
const storeGeorgianName = document.querySelector('.store-georgian-description');
const storeEnglishName = document.querySelector('.store-english-description');


storeSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(storeGeorgianName).display == 'none') {
        store.play();
    } else {
        storeGeorgianName.innerText = "მაღაზიას ხმა არ აქვს!";
        storeGeorgianName.style.color = 'white';
        storeGeorgianName.style.backgroundColor = '#e9185f';
        storeGeorgianName.style.borderRadius = '10px';
        storeGeorgianName.style.paddingInline = '5px';
        storeGeorgianName.style.display = 'flex';
        storeGeorgianName.style.textAlign = 'center';
        setTimeout(() => {
            storeGeorgianName.innerText = 'მაღაზია';
            storeGeorgianName.style.color = 'var(--blue)';
            storeGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

storeTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(storeGeorgianName).display == 'block') {
        storeSpeaker.style.opacity = '1';
        storeGeorgianName.style.display = 'none';
        storeEnglishName.style.display = 'block';
    } else {
        storeSpeaker.style.opacity = '0.2';
        storeEnglishName.style.display = 'none';
        storeGeorgianName.style.display = 'block';
    }
});

/* for store */


/* for bench */

const benchSpeaker = document.getElementById('bench-speaker');
const bench = document.getElementById('bench');
const benchTranslator = document.getElementById('bench-translator');
const benchGeorgianName = document.querySelector('.bench-georgian-description');
const benchEnglishName = document.querySelector('.bench-english-description');


benchSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(benchGeorgianName).display == 'none') {
        bench.play();
    } else {
        benchGeorgianName.innerText = "სკამს ხმა არ აქვს!";
        benchGeorgianName.style.color = 'white';
        benchGeorgianName.style.backgroundColor = '#e9185f';
        benchGeorgianName.style.borderRadius = '10px';
        benchGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            benchGeorgianName.innerText = 'სკამი';
            benchGeorgianName.style.color = 'var(--blue)';
            benchGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

benchTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(benchGeorgianName).display == 'block') {
        benchSpeaker.style.opacity = '1';
        benchGeorgianName.style.display = 'none';
        benchEnglishName.style.display = 'block';
    } else {
        benchSpeaker.style.opacity = '0.2';
        benchEnglishName.style.display = 'none';
        benchGeorgianName.style.display = 'block';
    }
});

/* for bench */


/* for crossroad */

const crossRoadSpeaker = document.getElementById('crossroad-speaker');
const crossRoad = document.getElementById('crossroad');
const crossRoadTranslator = document.getElementById('crossroad-translator');
const crossRoadGeorgianName = document.querySelector('.crossroad-georgian-description');
const crossRoadEnglishName = document.querySelector('.crossroad-english-description');
const crossRoadFooter = document.querySelector('.card-footer.crossroad');
const crossroadCard = document.querySelector('.crossroad')


crossRoadSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(crossRoadGeorgianName).display == 'none') {
        crossRoad.play();
    } else {
        crossRoadGeorgianName.innerText = "გზაჯვარედინს ხმა არ აქვს!";
        crossRoadGeorgianName.style.color = 'white';
        crossRoadGeorgianName.style.backgroundColor = '#e9185f';
        crossRoadGeorgianName.style.borderRadius = '10px';
        crossRoadGeorgianName.style.paddingInline = '5px';
        crossRoadGeorgianName.style.display = 'flex';
        crossRoadGeorgianName.style.textAlign = 'center';
        crossroadCard.style.height = '300px'
        crossRoadFooter.style.height = '50px';
        setTimeout(() => {
            crossRoadGeorgianName.innerText = 'გზაჯვარედინი';
            crossRoadGeorgianName.style.color = 'var(--blue)';
            crossRoadGeorgianName.style.backgroundColor = 'initial';
            crossRoadFooter.style.height = 'initial';
            crossroadCard.style.height = 'initial'
        }, 2000);
    }
});

crossRoadTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(crossRoadGeorgianName).display == 'block') {
        crossRoadSpeaker.style.opacity = '1';
        crossRoadGeorgianName.style.display = 'none';
        crossRoadEnglishName.style.display = 'block';
    } else {
        crossRoadSpeaker.style.opacity = '0.2';
        crossRoadEnglishName.style.display = 'none';
        crossRoadGeorgianName.style.display = 'block';
    }
});

/* for crossroad */


/* for park */

const parkSpeaker = document.getElementById('park-speaker');
const park = document.getElementById('park');
const parkTranslator = document.getElementById('park-translator');
const parkGeorgianName = document.querySelector('.park-georgian-description');
const parkEnglishName = document.querySelector('.park-english-description');


parkSpeaker.addEventListener('click', () => {
    if (window.getComputedStyle(parkGeorgianName).display == 'none') {
        park.play();
    } else {
        parkGeorgianName.innerText = "პარკს ხმა არ აქვს!";
        parkGeorgianName.style.color = 'white';
        parkGeorgianName.style.backgroundColor = '#e9185f';
        parkGeorgianName.style.borderRadius = '10px';
        parkGeorgianName.style.paddingInline = '5px';
        setTimeout(() => {
            parkGeorgianName.innerText = 'პარკი';
            parkGeorgianName.style.color = 'var(--blue)';
            parkGeorgianName.style.backgroundColor = 'initial';
        }, 2000);
    }
});

parkTranslator.addEventListener('click', () => {
    if (window.getComputedStyle(parkGeorgianName).display == 'block') {
        parkSpeaker.style.opacity = '1';
        parkGeorgianName.style.display = 'none';
        parkEnglishName.style.display = 'block';
    } else {
        parkSpeaker.style.opacity = '0.2';
        parkEnglishName.style.display = 'none';
        parkGeorgianName.style.display = 'block';
    }
});

/* for park */