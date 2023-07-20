
var autoArr = []; 
var myArr = []; 

// Level Up
function levelUp() {
    var lvl = autoArr.length;
    $("h1").text("Level "+lvl);
}

// Start of the game       
$(document).on("keypress", function(){
    if (autoArr.length < 1) {
        var randomB = $(".btn")[Math.floor(Math.random()*$(".btn").length)].classList[1];
        btnClick(randomB);
        autoArr.push(randomB);
        $("h1").text("Level 1");
    }
})
  



// CLick on a BTN
function btnClick(btn) {
    $("#"+btn).addClass("pressed");
        setTimeout(function() {
            $("#"+btn).removeClass('pressed');
        }, 150);
    new Audio('sounds/'+btn+'.mp3').play();
}



// Target BTN
$(".btn").click(function(event){
    var btnClass = event.target;
    switch (btnClass.classList[1]) {
        case "green":
            btnClick("green");
            break;
        case "red":
            btnClick("red");
            break;
        case "yellow":
            btnClick("yellow");
            break;
        case "blue":
            btnClick("blue");
            break;
        default:
            console.log("error");
            break;
    }
});


// Game Over
function gameOver() {
    $("h1").text("Game Over, Press Any Key to Restart");
    new Audio('sounds/wrong.mp3').play();
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    autoArr = [];
    myArr = [];
}


// Equality
function arraysAreEqual() {
    if (myArr.join('') === autoArr.join('')){
        return true;
    }   
}


// Me clicking
$(".btn").click(function(event){
    var clickedBtn = event.target.classList[1];
    myArr.push(clickedBtn);

    if (myArr.length == autoArr.length) {
        if (arraysAreEqual() === true) {  
            autoClicked();
            myArr = [];
            levelUp();
        } else {
            gameOver();
        }  
    } else {
        for (var i = 0; i < myArr.length; i++) {
            if (myArr[i] !== autoArr[i]) {
                gameOver();
            }
        }
    }

    if (myArr.length > autoArr.length) {
        gameOver();
    }
});



// Auto click
function autoClicked () {
    var randomB = $(".btn")[Math.floor(Math.random()*$(".btn").length)].classList[1];
    setTimeout(function() {
        btnClick(randomB);
      }, 500);
    
    autoArr.push(randomB);
}