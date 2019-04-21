

var allQuestions = [
    {
        question: "What sportscaster posted an NFL coaching record of 103-22-7",
        choices: ["John Madden", "Jerry Rice", "Tony Romo", "Terry Bradshaw"],
        correctAnswer: 0
    },

    {
        question: "What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977 ?",
        choices: ["Gloves", "Thigh Pads", "Socks", "Cup"],
        correctAnswer: 0
    },

    {
        question: "How many years must a player be retired to be eligible for the Pro Football Hall of Fame ?",
        choices: ["One", "Five", "Ten", "Three"],
        correctAnswer: 1
    },

    {
        question: "Who was the only player to rush for 2,000 yards when the NFL played a 14 game season?",
        choices: ["Patrick Swayze", "Barry Sanders", "OJ Simpson ", "Emmit Smith"],
        correctAnswer: 2
    },
    {
        question: "Who holds the best rookie passer rating in NFL history?",
        choices: ["Tom Brady", "Dak Prescott", "Dan Marino", "Baker Mayfield"],
        correctAnswer: 1
    },
    {
        question: "What is the oldest NFL franchise in continuous operation with the same name in the same location?",
        choices: ["Boston Highschool", "Cleveland Browns", "Chicago Bears", "Green Bay Packers"],
        correctAnswer: 3
    },
    {
        question: "Who was the first professional quarterback to pass for 5,000 yards in a season?",
        choices: ["Tom Brady", "Drew Brees", "Terry Bradshaw", "Warren Moon"],
        correctAnswer: 3
    },
    {
        question: "What team drafted Brett Favre?",
        choices: ["Falcons", "Eagles", "Bills", "Steelers"],
        correctAnswer: 0
    },
    {
        question: "4 of the first 5 picks in the 1989 NFL draft--Troy Aikman, Barry Sanders, Derrick Thomas and Deion Sanders--are in the Hall of Fame. Who was the bust?",
        choices: ["Blair Thomas", "Tom Worley", "Tony Mandarich", "Rick Mirer"],
        correctAnswer: 2
    },
    {
        question: "Who holds the single-season record for touchdown receptions",
        choices: ["Jerry Rice", "Randy Mose", "Tim Brown", "Snoop Dogg"],
        correctAnswer: 1
    },
    {
        question: "What former Dallas Cowboy replaced Phil Simms as color analyst for NFL telecasts on CBS??",
        choices: ["Tony Romo", "Troy Aikman", "Danny white", "Micheal Sam"],
        correctAnswer: 0
    },
];
var currentquestion = 0;
var correctAnswers = 0;
var Timer;
var maxTime = 29


function setupOptions() {
    $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
    var options = allQuestions[currentquestion].choices;
    var formHtml = '';
    for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            allQuestions[currentquestion].choices[i] + '</label></div><br/>';
    }
    $('#form').html(formHtml);
    $("#option0").prop('checked', true);
};

function checkAns() {
    if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
        correctAnswers++;
    };
};

$(document).ready(function () {

    $(".jumbotron").hide();
    $('#start').click(function () {
        $(".jumbotron").fadeIn();
        $(this).hide();

        Timer = setInterval(countDown, 1000);
        // loadQuestion();

    });

    // $(function () {
    //     $("#progressbar").progressbar({
    //         max: allQuestions.length - 1,
    //         // value: 0

    //     });
    // });

    function countDown() {
        $("#Timer").html(maxTime);
        maxTime--;
        $("#Timer").html(maxTime);

        if (currentquestion == allQuestions.length) {
            // clear the timer
            // check the answers
            // etc
            clearInterval(Timer);
        }

        if (maxTime < 1) {
            console.log("timeUp");
            clearInterval(Timer);
            // loadQuestion()
            nextQuestion();
            // stopTimer();
        }
        else if (maxTime > 1) {
            console.log("play")



        }
    }

    function nextQuestion() {
        currentquestion++;
        correctAnswers++;
        maxTime = 29;
        // loadQuestion();

    }


    setupOptions();

    $("#next").click(function () {
        event.preventDefault();
        checkAns();
        currentquestion++;
        $(function () {
            $("#progressbar").prepend({
                max: allQuestions.length - 1,
                value: 0
            });
        });
        // $(function () {
        //     $("#progressbar").progressbar({
        //         value: currentquestion
        //     });
        // });


        if (currentquestion < allQuestions.length) {
            setupOptions();
            if (currentquestion == allQuestions.length - 1) {
                $('#next').html("Submit");
                $('#next').click(function () {
                    $(".jumbotron").hide();
                    $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
                    $("#result").fadeIn(1500);
                });

            };

        };
    });
});

