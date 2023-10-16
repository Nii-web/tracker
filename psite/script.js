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

//Retreiving the array from local storage and storing in a variable
const days = JSON.parse(localStorage.getItem('array'));

function done(id)
{
    var el = document.getElementById(id)

    if(el.style.background === "rgb(207, 200, 225)")
    {
        el.style.background = "black"
        el.style.color = "white"
        days[id-1] = 1;
        localStorage.setItem('array',JSON.stringify(days));
    }
    else if(el.style.background === "black"){
        el.style.background = "#CFC8E1"
        el.style.color = "black"
        days[id-1] = 0;
        localStorage.setItem('array',JSON.stringify(days));
    }  
}

//Creating and styling the div elements depending on their array value in local storage
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

//Function called when the body is loaded to create 100 div elements
function trackButton()
{
    for(let i = 1; i < 101; i ++)
    {
        createl(i)
    }    
}
