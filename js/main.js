const elField1 = document.querySelector('.field1');
const elField2 = document.querySelector('.field2');
const elChoosePlanet = document.querySelector('.choosePlanet');
const elNumberPlanet = document.querySelector('input[name="planetByNumber"]');
const elGetPlanet = document.querySelector('input[name="bGetPlanetByNumber"]');

let playField1 = parseInt( elField1.value );
let playField2 =  parseInt( elField2.value );
let chooseYouPlanet =  parseInt( elChoosePlanet.value );


// ##############################################################
const DrawPlanets = (result) => {
    let planetParams = ""; // очистити накопичувальну HTML змінну
    for (var key in result.data) { // перелічити всі параметри в об'єкті та їх значення
        planetParams += `<p>${key}:   ${result.data[key]} </p>`; // форматуємо виводимі дані
    }
    elField2.insertAdjacentHTML('beforeend', planetParams); // виводимо всі дані накопичені у змінній
}

// ##############################################################
// Отримати планету по номеру
const GetOverHere = async (chooseYouPlanet) => {
    if (chooseYouPlanet != "" && chooseYouPlanet > 0) { // Перевірка чи число ми отримали від користувача
        // очистити блок виводу
        elField2.innerHTML = ""; // очистити блок виводу
        // показати анімацію завантаження
        elField2.innerHTML = ' Loading...  <img src="./img/loading.gif" alt="Loading..."> ';
        // отримати дані від віддаленого сервера
        const resultPlanetObj = await axios.get('https://swapi.dev/api/planets/' + chooseYouPlanet + '/');
        // відмалювати отримані дані в HTML (передаємо об'єкт)
        DrawPlanets(resultPlanetObj);
    }
    else {
        // якщо користувач ввів літеру або нічого не ввів
        elField2.innerHTML = " Пленету не обрано ";
    }
}

// ##############################################################
// Взаємодія з користувачем

// якщо змінюється випадаючий список
elChoosePlanet.addEventListener('change', () => {GetOverHere(parseInt( elChoosePlanet.value ))});
// якщо клік на кнопці
elGetPlanet.addEventListener('click', () => {GetOverHere(parseInt( elNumberPlanet.value ))});
// якщо натисли на клавіатурі клавішу ентер
document.addEventListener("keydown", (e) => {
    if (e.code === "Enter")         { GetOverHere(parseInt( elNumberPlanet.value )) };
});
