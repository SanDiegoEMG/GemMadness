<script type="text/javascript">

$(document).ready(function () {

    var gemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var addArray = [];
    var sum = 0;
    var win = 0;
    var loss = 0;
    var compN = 0;

    // generate random number between 19-120 & have print to correct place on screen
    // used return and don't really understand it
    // moved this function up bc it is core and I can call it later
    function compNumber() {
        var comp = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#randomNum").text(comp);
        compN = comp;
        return compN;
    }

    compNumber()

    //generate random number between 1-12 for the gemstones and had it console.log ... got that but couldn't figure out how to attach to the images so score could be tallied ... moved to using an array 
    function gemNumber() {
        var num = gemArray[Math.floor(Math.random() * gemArray.length)];
        console.log("Generated gemstone numbers: " + num)
        x = num;
        return x;
    }


    //looking at & applying things from the calculator exercise. this resets display numbers to 0 and calls the function that creates new comp number
    function initializeRound() {
        compNumber();
        $("#losses").text(loss);
        $("#wins").text(win);
        $("#sumNum").text(sum);
    }

    var gemNum1 = gemNumber();
    var gemNum2 = gemNumber();
    var gemNum3 = gemNumber();
    var gemNum4 = gemNumber();
    //use button to reset & generate new compNum??!

    $("#reset").on("click", function () {
        initializeRound();
    })





    //stores a random value - created by function above - to each gemstone ... could write for loop if there were lots and lots of these





    // var gems = document.querySelectorAll(".gem");

    // for (let i = 0; i < 4; i++) {
    //     var inForLoop = gemNumber(gemNum[i]);
    //         gems.addEventListener('click', function () {
    //         event.preventDefault();
    //         addArray.push(inForLoop);
    //         console.log(addArray.length);
    //         console.log(addArray);
    //         sum += inForLoop;
    //         console.log("New score: " + sum);
    //         $("#sumNum").text(sum);
    //     })
    // } 

    //Assign genNum number to each gemstone and when clicked, send that number to an array/function that tallies & displays sumNum
    // DRY!  for loop??
    $("#gemstone1").on("click", function () {
        event.preventDefault();
        addArray.push(gemNum1);
        console.log(addArray.length);
        console.log(addArray);
        sum += gemNum1;
        console.log("New score: " + sum);
        $("#sumNum").text(sum);
    })

    $("#gemstone2").on("click", function () {
        event.preventDefault();
        addArray.push(gemNum2);
        console.log(addArray.length);
        console.log(addArray);
        sum += gemNum2;
        console.log("New score: " + sum);
        $("#sumNum").text(sum);
    })

    $("#gemstone3").on("click", function () {
        event.preventDefault();
        addArray.push(gemNum3);
        console.log(addArray.length);
        console.log(addArray);
        sum += gemNum3;
        console.log("New score: " + sum);
        $("#sumNum").text(sum);
    })

    $("#gemstone4").on("click", function () {
        event.preventDefault();
        addArray.push(gemNum4);
        console.log(addArray.length);
        console.log(addArray);
        sum += gemNum4;
        console.log("New score: " + sum);
        $("#sumNum").text(sum);
    })


    if (sum === compN) {
        win++;
        alert("You won this round!");
    }
    else if (sum >= compN) {
        loss--;
        alert("You lost this round!!");
    }



    if (wins + loss === 10 && wins > loss) {
        confirm("Congratulations you won the game! Would you like to play again?");
        if (true) {
            initialize.Round();
        }
    }
    else if (wins + loss === 10 && loss > win) {
        confirm("Ruh roh. Guess this isn't your lucky day. Would you like to play again?");
    }
    //I only get the if conditional to work when it is included in the gemstone click event blocks ...added a parent element but still no luck!

    //Complete reset to reset wins & losses - click button or automatically triggered when win+loss=10 

})
  </script>
