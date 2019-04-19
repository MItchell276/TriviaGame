

var allQuestions = [{
    question: "What sportscaster posted an NFL coaching record of 103-22-7",
    choices: ["John Madden", "Jerry Rice", "Tony Romo", "Terry Bradshaw"],
    correctAnswer: 0
},

{
    question: "What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977 ?",
    choices: ["Gloves", "Thigh Pads", "Socks"],
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
]

var currentquestion = 0;
var correctAnswers = 0;
var Timer;
var maxTime = 5


$(document).ready(function () {
    console.log("ready!");

    $("#start").click(function () {
        $(this).fadeOut();
        $(this).hide();
        loadQuestion()
    });
});

function countDown() {
    $("#Timer").html(maxTime)
    maxTime--
    // $("#Timer").html(maxTime)
    if (maxTime < 0) {
        console.log("timeUp")
        clearInterval(Timer)
        nextQuestion()
        // loadQuestion()
    }


}


function loadQuestion() {
    Timer = setInterval(countDown, 1000)
    $("#question").append("<h3>" + allQuestions[currentquestion].question + "</h3>")
    for (var i = 0; i < allQuestions[currentquestion].choices.length; i++) {
        console.log(allQuestions[i].question)
        $("#question").append("<button class='answerButton' data-name='" + allQuestions[currentquestion].choices[i] + "'>" + allQuestions[i].choices[i] + "</button>")

    }
    $("#question").append("<button id= 'next'>Next</button")
}
function nextQuestion() {
    currentquestion++
    maxTime = 5
    loadQuestion()

}


$(document).click("#next", function () {
    nextQuestion()
    // event.preventDefault();
    // checkAns();
    // currentquestion++;
    // $(function () {
    //     $("#Timer").Clock({
    //         value: currentquestion
    //     });
    // });





});
