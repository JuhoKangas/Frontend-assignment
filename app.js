$( document ).ready(function() {

    const successCallback = position => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        $.ajax({
            //In production use dotenv to hide API keys
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b19f051330ba018a84f40e9c5c53f999&units=metric`,
            method: 'GET',
            dataType: 'json'
        })
        .done(function(data) {
            $('.weather').text(JSON.stringify(data));
            $('.weather').before('<h1>Ajax request:</h1>')
        })
        .fail(function(xhr, status, errorThrown) {
            alert('Sorry, there was a problem!');
            console.log(`Error : ${errorThrown}`);
            console.log(`Status : ${status}`);
            console.dir(xhr);
        });

        //Another method which works here just fine but overall is less configurable
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b19f051330ba018a84f40e9c5c53f999&units=metric`, function(data) {
            $('.weather2').text(JSON.stringify(data));
            $('.weather2').before('<h1>Simpler, but less configurable getJSON request:</h1>')
        });
    };

    const errorCallback = err => {
        console.warn(`ERROR(${err.code}): ${err.message}`)
    };

    const options = {
        enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
});