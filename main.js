$(function(){
    dotFlex = document.getElementById("dotFlex")

weeksInYear = 4160
weeksOver = 844

$("#dotFlex").hide();
$("#intro-flex").hide();
$("#main-content").hide();

function drawDots(){
    for(let i = 0; i <= weeksInYear; i++){
        // if (i % 52 == 0){
        //     dot = document.createElement('week_dot_year')
        // }
        if (i == weeksInYear){
            dot = document.createElement('div')
            dot.classList.add('weekDotYear')
        }
        else{
            dot = document.createElement('div')
            dot.classList.add('weekDot')
        }
        dot.classList.add("dot")
        $(dot).hide()
        dotFlex.appendChild(dot)        
    }
}

function fillIn(){
    dots = document.getElementsByClassName("dot")
    console.log('here')
    for(let i = 0; i < weeksOver; i++){
        dots[i].classList.remove('weekDot')
        dots[i].classList.add('weekDotFull')
    }
}

function showDots(){  
    dots = document.getElementsByClassName('dot')
    for(let i = 0; i < dots.length; i++){
        if(i === dots.length - 1){
            $(dots[i]).delay(i*1).fadeIn(300, function(){
                fillIn()
            })

        }
        else{$(dots[i]).delay(i*1).fadeIn(300)}
    }
}



$("#intro-flex").click(function(){
    $("#intro-flex").fadeOut("slow", function(){
        $("#top-bar").fadeIn();
        $("#main-content").show();
        drawDots()
        $("#dotFlex").show(function(){ 
            showDots()
        })
    })
})

$('#input-button').click(function(){
    $('#input-flex').fadeOut()
    $('#intro-flex').fadeIn()
})
})