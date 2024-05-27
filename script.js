var num = document.getElementById("inputbox")
var btn = document.getElementById("btn")
var result = document.getElementById("result")
var guess = document.getElementById("guess")
var noofguess = 10

var randomnumber = Math.floor(Math.random()*100)+1
function checktheguess(){
    if(inputbox.value == randomnumber){
        alert("unnakum Konjam Moolai irruku!")
        result.textContent = "Your are right!"

    }
    else{
        noofguess=noofguess-1
        if(noofguess==0){
            alert("tharkuri,enthu koda theriyal!:"+randomnumber)
        }
        result.textContent = "You are wrong!"
        guess.textContent="Available Guess"+noofguess



        
    }
}