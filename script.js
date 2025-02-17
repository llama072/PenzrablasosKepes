const cities = [
    { name: "Berlin", value: "Berlin" },
    { name: "Tokyo", value: "Tokyo" },
    { name: "Rio", value: "Rio" },
    { name: "Nairobi", value: "Nairobi" },
    { name: "Lisszabon", value: "Lisbon" },
    { name: "Moszkva", value: "Moscow" },
    { name: "Denver", value: "Denver" },
    { name: "Stockholm", value: "Stockholm" },
    { name: "Helsinki", value: "Helsinki" },
    { name: "Professor", value: "Professor" }
];

window.addEventListener('DOMContentLoaded', betolt);

function betolt() {
    // ---- fő konténer div létrehozása ----
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // label létrehozása
    const labelForCity = document.createElement('label');
    labelForCity.htmlFor = 'city';
    labelForCity.textContent = 'Válassz egy várost';

    // select létrehozása
    const selectCity = document.createElement('select');
    selectCity.id = 'city';
    selectCity.name = 'city';

    // a select tag option gyerekelemeinek létrehozása a cities tömb elemeinek felhasználásával
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.value;
        option.textContent = city.name;

        // hozzá adjuk gyerekelemnként a selectCity-nez
        selectCity.append(option);
    });

    // a fő konténerhez hozzá adjuk a gyerek elemeket
    containerDiv.append(labelForCity, selectCity);

    // ---- finish div ----
    const finishDiv = document.createElement('div');
    finishDiv.id = 'finish';

    // bekezdés létrehozása
    const p = document.createElement('p');
    p.textContent = 'A választottad: ';

    // a demo azonosítójú span tag létrehozása és a p tag gyerekelemeként fűzzük be
    const demoSpan = document.createElement('span');
    demoSpan.id = 'demo';
    p.append(demoSpan);

    // az image id div létrehozása
    const imageDiv = document.createElement('div');
    imageDiv.id = 'image';

    // fűzzük bele a finishDiv-be a gyerekelemeket
    finishDiv.append(p, imageDiv);

    // hozzáfűzzük a div-eket a html body eleméhez
    document.body.append(containerDiv, finishDiv);
    
    // meghívjuk a change eseményre a kep nevű függvényt, paraméterben pedig elküldjük a kep funtcion-höz szükséges elemeket
    selectCity.addEventListener('change', () => kep(selectCity, demoSpan, imageDiv));
}

function kep(selectCity, demoSpan, imageDiv) {
    //console.log('lefutott a kep nevű függvény');
    //console.log(selectCity, demoSpan, imageDiv);
    
    // tároljuk el a kiválasztott város értékét
    const selectedValue = selectCity.value;
    //console.log(selectedValue);
    
    // állítsuk be a válaszott város nevét a span tag-be
    demoSpan.textContent = selectedValue;

    // a kép létrehozása, utána az elérési út beállítása, majd az alt és a title megadása
    const kep = document.createElement('img');
    kep.src = `./img/${selectedValue.toLowerCase()}.jpg`;
    kep.alt = selectedValue;
    kep.title = selectedValue;
    console.log(kep)


    // végül cseréljük ki az imageDiv tartalmát az új képre

    imageDiv.replaceChildren(kep);
    
};