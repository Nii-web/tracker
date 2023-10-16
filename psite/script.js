/*const days = [0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,];
//Storing tthe array in local storage
localStorage.setItem('array', JSON.stringify(days));*/
const days = JSON.parse(localStorage.getItem('array'));
function done(id)
{
    var el = document.getElementById(id)
    console.log(el.style.background)
    
    //debugger;
    if(el.style.background === "rgb(207, 200, 225)")
    {
        console.log("if " + el.style.background)
        el.style.background = "black"
        el.style.color = "white"
        days[id-1] = 1;
        localStorage.setItem('array',JSON.stringify(days));
    }
    else if(el.style.background === "black"){
        console.log("else if " + el.style.background)
        el.style.background = "#CFC8E1"
        el.style.color = "black"
        days[id-1] = 0;
        localStorage.setItem('array',JSON.stringify(days));
    }  
}
function createl(id)
{
    const card = document.createElement("div");
    card.className = "cards";
    document.getElementById("box").append(card);
    card.id = id;
    card.innerHTML = id
    if(days[id-1] === 1)
    {
        card.style.background = "black";
        card.style.color = "white";
    }
    else
    {
        card.style.background = "#CFC8E1";
    }
    card.addEventListener("click", ()=>done(id))
}

function trackButton()
{
    for(let i = 1; i < 101; i ++)
    {
        createl(i)
    }    
}

function readFile()
{
    let data = ""

    var reader = new FileReader();

    reader.onload = function(){
        data = reader.result;
    }
    reader.readAsText(this.files[0])
}