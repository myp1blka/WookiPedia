const elField1 = document.querySelector('.field1');
const elField2 = document.querySelector('.field2');
const elChoosePlanet = document.querySelector('.choosePlanet');


let playField1 = parseInt( elField1.value );
let playField2 =  parseInt( elField2.value );
let chooseYouPlanet =  parseInt( elChoosePlanet.value );












const GetOverHere = async () => {
    elField2.innerHTML = '';
    chooseYouPlanet =  parseInt( elChoosePlanet.value );
    const result = await axios.get('https://swapi.dev/api/planets/' + chooseYouPlanet + '/');
    console.log (result.data);
    elField2.innerHTML = JSON.stringify(result.data);

}




elChoosePlanet.addEventListener('change', () => {GetOverHere()});
