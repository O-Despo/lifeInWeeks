$(function(){
    dotFlex = document.getElementById("dotFlex")

weeksInYear = 4160 - 884
weeksOver = 844

startWeekColor = 61

$("#dotFlex").hide();
$("#intro-flex").hide();
$("#main-content").hide();

var dotsDrawn = false;
var cursor = null;

function drawDots(){
    for(let i = 0; i <= weeksInYear; i++){
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


function cursorBlink(){
    $(cursor).animate({
        backgroundColor: 'white'
    }, 500).delay(500).animate({
        backgroundColor: 'black'
    }, 500)
}

function fillIn(){
    dots = document.getElementsByClassName("dot")
    console.log('here')
    for(let i = 0; i < weeksOver; i++){
        $(dots[i]).delay(i*6).animate({
            backgroundColor: 'white',
        }, 600);
    }

    // sets a timer to make the last dot look like a cursor
    cursor = dots[weeksOver]
    setInterval(cursorBlink, 500)
}

function showDots(){ 
    dotsDrawn = true
    dots = document.getElementsByClassName('dot')
    for(let i = 0; i < dots.length; i++){
        if(i === dots.length - 1){
            $(dots[i]).delay(i*1).fadeIn(200, function(){
                fillIn()
            })
        }
        else{$(dots[i]).delay(i*1).fadeIn(300)}
    }

}

function removeDots(dotsToRemove){
    for(let i = 0; i < dotsToRemove.length; i++){
        dot = dotsToRemove[dotsToRemove - 1] 
        $(dot).delay(i * 100).fadeOut(300)
    }
}



$("#intro-flex").click(function(){
    $("#intro-flex").fadeOut("slow", function(){
        $("#top-bar").fadeIn();
        $("#main-content").show();
        if(dotsDrawn == false){
            drawDots()
            dotsDrawn = true
        $("#dotFlex").show(function(){
                showDots()
            })
        }
    })
})

$('#input-flex').click(function(){
    $('#input-flex').fadeOut()
    $('#intro-flex').fadeIn()
})
})