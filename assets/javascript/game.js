


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

    //generate numbers for each gem image
    // jQuery to 

    for (var i = 1; i <= 4; i++) {
        $("#gemstone" + i).attr("data-crystal", gemNumber());
    }

    $("#losses").text(loss);
    $("#wins").text(win);
    $("#sumNum").text(sum);


    

    // function to 'start a round'
    function playGame() {
        y = compNumber();
        $("#randomNum").text(y);

        $(".gem").click(function (event) {
            event.preventDefault();
            console.log($(this).attr("id"), " my value is ", $(this).attr("data-crystal"));
            var crystalScore = parseInt($(this).attr("data-crystal"));
            sum += crystalScore;
            console.log("New score: " + sum);
            $("#sumNum").text(sum);

            if (sum === y) {
                $("#sumNum").text(sum);
                win++;
                $("#wins").text(win);
                y = compNumber();

                for (var i = 1; i <= 4; i++) {
                    $("#gemstone" + i).attr("data-crystal", gemNumber());
                }
                sum = 0;
                $("#sumNum").text(sum);
            }
            else if (sum >= y) {
                $("#sumNum").text(sum);
                loss++;
                $("#losses").text(loss);
                y = compNumber();
                for (var i = 1; i <= 4; i++) {
                    $("#gemstone" + i).attr("data-crystal", gemNumber());
                }
                sum = 0;
                $("#sumNum").text(sum);
            }
        })

    }

    playGame();


});

