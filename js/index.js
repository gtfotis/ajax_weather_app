'get strict';
const locationTemp = document.querySelector('#weather');
fetch('http://api.openweathermap.org/data/2.5/forecast?id=4469160&appid=825c5e671bc5e728c075974bc188342f&units=imperial').then(function (response) {
    console.log('Fetch response is: ', response)
    return response.json();
}).then(function (data) {
    console.log('The data is: ', data);
    document.getElementById('weather').innerHTML = data.list[0].main.temp
});