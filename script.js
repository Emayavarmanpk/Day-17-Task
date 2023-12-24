const div = document.createElement("div");
const div1 = document.createElement("div");
const cardHeader = document.createElement("div");


div.setAttribute("class", "container");
div1.setAttribute("class", "row");
fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((ele) => {
    for (i = 0; i < ele.length; i++) {
        const res = document.createElement("div")
        res.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4 g-4")
        res.innerHTML = `<div class="card h-100">
        <div class="card-header">
        <h1 class="text-center" id="title">${ele[i].name.common} </h1>
        </div>
        <img src="${ele[i].flags.png}" class="card-img-top" alt="flag">
        <div class="card-body id="cbody">
        <div class="card-text">
        <p>  Region : ${ele[i].region} <br>
        Population : ${ele[i].population}</p>
        <button type="button" class="btn btn-primary" onclick="getData('${ele[i].name.common}')">Click for Weather</button>
        </div>
       </div>
        `
        div1.append(res);
    }
})
function getData(name) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4c0033e593e7af096d7e7ec870266f97`).then((res) => res.json()).then((data) => {
        var countryname = data.name;
        if (countryname === name) {
            alert(`Weather is ${data.name} is 
           Minimum ${data.main.temp_min}
           Maxmum ${data.main.temp_max}
           Wind speed ${data.wind.speed}`
            )
        }
        else{
            alert("This country wether not show in the api")
        }
    })
}

div.append(div1);
document.body.append(div);
