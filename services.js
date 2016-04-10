myapp.service('cityService',function(){
    this.city="San Francisco, CA";
});

myapp.service('weatherService',['$resource',function($resource){
    this.GetWeather = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ callback: "JSON_CALLBACK"},{get:{method:"JSONP"}});
    
        return weatherAPI.get({q:city, cnt:days, appid:'c02e0325ef8295b236a3054bb520cb4b'});
    }
}]);