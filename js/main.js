const elField1 = document.querySelector('.field1');
const elField2 = document.querySelector('.field2');
const elChoosePlanet = document.querySelector('.choosePlanet');


let playField1 = parseInt( elField1.value );
let playField2 =  parseInt( elField2.value );
let chooseYouPlanet =  parseInt( elChoosePlanet.value );


// ##############################################################
const DrawPlanets = (result) => {
    let planetParams = "";
    for (var key in result.data) {
        planetParams += `<p>${key}:   ${result.data[key]} </p>`;
        //console.log("key: " + key + " значение: " + result.data[key] );
    }
    elField2.innerHTML = "";
    elField2.insertAdjacentHTML('beforeend', planetParams);
}
// ##############################################################
const GetOverHere = async () => {
    elField2.innerHTML = "";
    elField2.innerHTML = ' Loading...  <img src="./img/loading.gif"> ';
    chooseYouPlanet =  parseInt( elChoosePlanet.value );
    const resultPlanetObj = await axios.get('https://swapi.dev/api/planets/' + chooseYouPlanet + '/');
    //console.log (resultPlanetObj.data);
    DrawPlanets(resultPlanetObj);
}

// ##############################################################
elChoosePlanet.addEventListener('change', () => {GetOverHere()});
