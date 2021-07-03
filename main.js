$(function(){
    dotFlex = document.getElementById("dotFlex")

weeksInYear = 4160
weeksOver = 844

$("#dotFlex").hide();

function drawDots(){
    for(let i = 0; i <= weeksInYear; i++){
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
        dot.classList.add("dot")
        $(dot).hide()
        dotFlex.appendChild(dot)        
    }
}

function showDots(dot){  
    dots = document.getElementsByClassName('dot')
    for(let i = 0; i < dots.length; i++){
        $(dots[i]).delay(i*1).fadeIn(500)
    }
}


$("#intro-flex").click(function(){
    $("#intro-flex").fadeOut("slow", function(){
        $("#top-bar").fadeIn();
        drawDots()
        $("#dotFlex").show(function(){ 
                showDots()
            })
    })
})
})