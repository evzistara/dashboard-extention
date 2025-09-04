//Fetching background picture
try{
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=dog");
const data = await res.json()
document.body.style.backgroundImage = `url("${data.urls.regular}")`;
document.querySelector('.author-name').textContent = data.user.name;
console.log(data.urls.regular,data.user.name )
} catch(err){
document.body.style.backgroundImage = "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTY5OTkxMjZ8&ixlib=rb-4.1.0&q=80&w=1080";
document.querySelector('.author-name').textContent = "Hanny Naibaho";
}


//Fetching quote
try{
   const res2 = await fetch("https://api.gameofthronesquotes.xyz/v1/random")
   if(!res2.ok){
    throw Error("Something went wrong")
   }
const data2 = await res2.json();
document.querySelector(".quote").innerHTML = `
<p>${data2.sentence}</p>
<p> -${data2.character.name}</p>
` 
} catch(err){
    document.querySelector(".quote").innerHTML =`<p>${err}</p>`
}

//Getting time
function getTime(){
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.querySelector(".time-show").textContent = time;
}
setInterval(getTime, 1000)

//Fetching location and current weather
navigator.geolocation.getCurrentPosition(async position => {
    try{
         const res3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=bb40f87e095b83c1818d27693f810889`)
    if(!res3.ok){
        throw Error("Weather data not available")
    }
         const data3 = await res3.json()
    document.querySelector('.weather').innerHTML= `
    <div class="weather-temp">
    <img src="https://openweathermap.org/img/wn/${data3.weather[0].icon}@2x.png">
    <p>${Math.round(data3.main.temp)}°</p>
    </div>
    <p>${data3.name}</p>` 
    } catch(err){
document.querySelector('.weather').innerHTML= `<p>${err}</p>`
    }
})

	
