function cheakWeather(){
    var weather = document.getElementById("WC").value;
    if(weather>=50 && weather>=40){
        document.write("It's Hot outside, only fifty degrees, You'll need to stay hydrated and wear light clothing to stay cool.");
    }
    else if(weather>=40 && weather>=30){
        document.write("It's very hot outside. The temperature is forty degrees. You'll need to stay hydrated and wear light clothing to stay cool.");
    }
    else if(weather>=30 && weather>=20){
        document.write("It's quite chilly outside. The temperature is only 30 degrees. You'll need to wear warm clothes if you go out.");
    }
    else if(weather>=20 && weather>=10){
        document.write("The temperature outside is twenty degrees. This is considered quite cold, especially for many regions. You'll likely need warm clothing if you venture outdoors.!");
    }
    else if (weather>=10 && weather>=0){
        document.write("It's freezing outside. The temperature is zero degrees. Bundle up if you go out; it's very cold.");
    }
    else if(weather>=0 && weather>=-10){
        document.write("It's a Freezing Day!,It's extremely cold outside. The temperature is a frigid negative ten degrees. Bundle up warmly if you venture outdoors!");
    }
    else{
        document.write("Invalid Input!");
    }


}