$(function(){
body = document.getElementById("dotFlex")

weeksInYear = 4160
weeksOver = 844


for(let i = 0; i <= 4680; i++){
    if (i % 52 == 0){
        dot = document.createElement('week_dot_year')
    }
    else if (i <= weeksOver){
        dot = document.createElement('week_dot_full')
    }
    else if (i == 4680){
        dot = document.createElement('week_dot_death')
    }
    else{
        dot = document.createElement('week_dot')
    }
    body.appendChild(dot)
}

function introAnimate(){
    introFlex = document.getElementById('large');
    let opacity = 1.00;

    for(let i = 0; i <= 100; i++){
        opacity = opacity - 0.01
        introFlex.style.opacity = opacity
        console.log(opacity)
    }
    // introFlex.style.opacity = opacity
}

});