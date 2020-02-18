var search =document.getElementById('search');
search.addEventListener('keyup', e =>{
    if (e.keyCode === 13 ){
        var getCityName = e.target.value;
    }
    getweather(getCityName);
});

function getweather(getCityName){
    const weatherApi =`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&mode=json&units=metric&&APPID=13822333cefdf097f89a34b85b09a747`;
    window
    .fetch(weatherApi)
    
    .then(data =>{
        data
        .json()
        .then(weather =>{
            
            var output ="";
            console.log(weather);
            var weatherData = weather.weather;
           /* console.log(weather.coord.lon);
            console.log(weather.coord.lat);
            console.log(weather.main.temp);
            console.log(weather.main.pressure);
            console.log(weather);*/
            
            for (let x of weatherData){
                output+=`
                <div class="md-4 offset-4 mt-4 card">
                <div class="card-body">
                   <h1>${weather.Name}</h1>
                   <span class="icon">
                   <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
                   <p><span>temp:</span>
                   <span class="temp">${weather.main.temp}&deg;c</span></p>
                   <span class="des float-left">${x.description}</span>
                   <span class="des float-right">${x.main}</span>
                   
                    </div>
                  </div>`;
                 document.getElementById("template").innerHTML=output;
            }
               /* console.log(x);
                console.log(x.id);
                console.log(x.main);
                console.log(x.description);
                console.log(x.icon);*/
            
        })
        .catch(err => console.log(err));
    })
.catch(err => console.log(err));
}
