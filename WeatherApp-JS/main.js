document.addEventListener("DOMContentLoaded", () => {
    
    let input = document.querySelector('.input');
    let submit = document.querySelector('.submit');
    let name = document.querySelector('.name');
    let temp = document.querySelector('.temp');
    let tempCel = document.querySelector('.temp-cel');
    let des = document.querySelector('.des');

    name.classList.add('hide');
    tempCel.classList.add('hide');
    des.classList.add('hide');
    
    submit.addEventListener('click', () => {

        var inputValue = input.value;

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=9af17f7d1fdad3e7a9978182d3f257f6')
        .then(Response => Response.json())
        .then(data => {
    
            const cityName = data.name;
            const tem = data.main.temp;
            const tempMain = tem - 273.15;
            const description = data.weather[0].description;
    
            name.innerHTML = cityName;
            temp.innerHTML = tempMain.toFixed(1);
            des.innerHTML = description;

            name.classList.add('show');
            tempCel.classList.add('show');
            des.classList.add('show');
        });
    });
});