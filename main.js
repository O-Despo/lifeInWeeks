$(function(){
    dotFlex = document.getElementById("dotFlex")

    
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
    for(let i = 0; i < weeksOver; i++){
        $(dots[i]).delay(i*6).animate({
            backgroundColor: 'white',
        }, 600);
        if(i == weeksOver - 1){
            increasePercent()
        }
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

var currentPercent = 0
var percentOver;
 
function increasePercent(){
    if (currentPercent !== percentOver){
       currentPercent += 1
    //    $('#percentageComplete').text(String(currentPercent + "%")) 
       $('#percentageComplete').text(String("Your life is " + currentPercent + "% complete")) 
       setTimeout(increasePercent, 200)
    }
}

let weeksInYear = 4160
let weeksOver;

$("#numOfWeekPage").hide();
$("#dataEntryPage").hide();
$("#mainContentPage").hide();
$("#settingPage").hide()


$('#numOfWeekTitle').click(function(){
    $('#numOfWeekTitle').fadeOut(500, function(){
        $("#numOfWeekLive").fadeIn(500)
    })
})


$('#numOfWeekLive').click(function(){
    $('#numOfWeekLive').fadeOut(500, function(){
        $("#numOfWeekPassed").fadeIn(500)
    })
})
//After number of weeks is displayed move to main content and draw dots
$("#numOfWeekPassed").click(function(){
    $("#numOfWeekPage").fadeOut("slow", function(){
        $("#mainContentPage").fadeIn();
        $("#dotFlex").show();
        if(dotsDrawn == false){
            drawDots()
            dotsDrawn = true
            $("#dotFlex").show(function(){
                showDots()
            })
        }
    })
})

//After data input show number of weeks page
$("#inputButton").click(function(){
    //Age input to weeks over
    var inputAge = $('#ageEntry').val()
    weeksOver = inputAge * 52
    percentOver = Math.floor(weeksOver / (weeksInYear/100))
    $("#dataEntryPage").fadeOut("slow", function(){
        $("#numOfWeekPage").fadeIn();
        //setting contents of what shows later
        $("#numOfWeekLive").hide().text(
            "You will live through " + weeksInYear + " weeks"
        )
        $("#numOfWeekPassed").hide().text(
            "You have already lived " + weeksOver + " weeks"
        )
    })
})

//After warning page fade to data entry page 
$("#wanring3").click(function(){
    $("#warningPage").fadeOut("slow", function(){
        $("#dataEntryPage").fadeIn();
    })
})
})