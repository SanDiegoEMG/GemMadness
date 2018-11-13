


$(document).ready(function () {

    // array for gem image values
    var gemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    //array to hold values for addition
    var addArray = [];
    //variables 
    var sum = 0;
    var win = 0;
    var loss = 0;
    // why do I throw a consule error if I declare var compN in the function below??
    var compN = 0;



    //generate random number for player to match
    function compNumber() {
        var comp = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#randomNum").text(comp);
        compN = comp;
        return compN;
    };

    //generate random number for the gem images
    function gemNumber() {
        var num = gemArray[Math.floor(Math.random() * gemArray.length)];
        console.log("Generated gemstone numbers: " + num)
        x = num;
        return x;
    };

    //BIG function to wrap up everything I want to happen 
    function playGame() {
        y = compNumber();
        console.log("y = compNumber   console print y = " + y);

        //generate numbers for each gem image
        gemNum1 = gemNumber();
        gemNum2 = gemNumber();
        gemNum3 = gemNumber();
        gemNum4 = gemNumber();

        // Create variables to hold references to  places in the HTML where we want to display things.
        $("#losses").text(loss);
        $("#wins").text(win);
        $("#sumNum").text(sum);

        $("#gemstone1").click(function () {
            event.preventDefault();
            addArray.push(gemNum1);
            console.log(addArray.length);
            console.log(addArray);
            sum += gemNum1;
            console.log("New score: " + sum);
            $("#sumNum").text(sum);
            console.log("This is y: " + y);
            if (sum === y) {
                $("#sumNum").text(sum);
                win++;
                $("#wins").text(win);
                $("#sumNum").text("Excellent! You won this round!");
                y = compNumber();
                gemNum1 = gemNumber();
                gemNum2 = gemNumber();
                gemNum3 = gemNumber();
                gemNum4 = gemNumber();
                sum = 0;
                $("#sumNum").text(sum);

            }
            else if (sum >= y) {
                $("#sumNum").text(sum);
                loss++;
                $("#losses").text(loss);
                $("#sumNum").text("Too bad. You went over and lost this round.")
                y = compNumber();
                gemNum1 = gemNumber();
                gemNum2 = gemNumber();
                gemNum3 = gemNumber();
                gemNum4 = gemNumber();
                sum = 0;
                $("#sumNum").text(sum);
            }
        })

        // $("#gemstone2").click(function () {
        //     event.preventDefault();
        //     addArray.push(gemNum2);
        //     console.log(addArray.length);
        //     console.log(addArray);
        //     sum += gemNum2;
        //     console.log("New score: " + sum);
        //     $("#sumNum").text(sum);
        //     console.log("This is y: " + y);
        //     if (sum === y) {
        //         $("#sumNum").text(sum);
        //         win++;
        //         $("#wins").text(win);
        //         $("#sumNum").text("Excellent! You won this round!");
        //     }
        //     else if (sum >= y) {
        //         $("#sumNum").text(sum);
        //         loss++;
        //         $("#losses").text(loss);
        //         $("#sumNum").text("Too bad. You went over and lost this round");
        //     }
        // })

        // $("#gemstone3").click(function () {
        //     event.preventDefault();
        //     addArray.push(gemNum3);
        //     console.log(addArray.length);
        //     console.log(addArray);
        //     sum += gemNum3;
        //     console.log("New score: " + sum);
        //     $("#sumNum").text(sum);
        //     console.log("This is y: " + y);
        //     if (sum === y) {
        //         $("#sumNum").text(sum);
        //         win++;
        //         $("#wins").text(win);
        //         $("#sumNum").text("Excellent! You won this round!");
        //     }
        //     else if (sum >= y) {
        //         $("#sumNum").text(sum);
        //         loss++;
        //         $("#losses").text(loss);
        //         $("#sumNum").text("Too bad. You went over and lost this round.")
        //     }
        // })

        // $("#gemstone4").click(function () {
        //     event.preventDefault();
        //     addArray.push(gemNum4);
        //     console.log(addArray.length);
        //     console.log(addArray);
        //     sum += gemNum4;
        //     console.log("New score: " + sum);
        //     $("#sumNum").text(sum);
        //     console.log("This is y: " + y);
        //     if (sum === y) {
        //         $("#sumNum").text(sum);
        //         win++;
        //         $("#wins").text(win);
        //         $("#sumNum").text("Excellent! You won this round!");
        
        //     }
        //     else if (sum >= y) {
        //         $("#sumNum").text(sum);
        //         loss++;
        //         $("#losses").text(loss);
        //         $("#sumNum").text("Too bad. You went over and lost this round.")
        //     }
        // })
    }

    playGame();


});

