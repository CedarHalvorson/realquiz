let questionNumber = 0 ;
let seconds = document.getElementById("countdown").textContent;

const questionEl = document.getElementById("question");


let questionArray = [
    {
    question:'how many fingers do most people have.',
    options: ['1','2','3','4','5'],
    answer:'5'
    },
    {
    question: "are birds real",
    options: ['yes','no',"who's asking","im not crazy you're crazy","they're frogs"],
    answer:"who's asking"
    },
    {
    question: "are legs on feet or are feet on legs",
    options: ['yes','no',"spigooti","i drink pond water","my eyes are salty"],
    answer:"i drink pond water"
    },
];

let answerButton = document.querySelectorAll("#answer")
console.log(answerButton)

for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener("click",handleAnswer)
}

function buttonText(number) {
    if (questionNumber<questionArray.length){
        for (let i = 0; i < answerButton.length; i++) {
            answerButton[i].textContent = questionArray[number].options[i];
        }
    } else {
        return;
    }
}

function handleAnswer(event){
    console.log(`Question Number is: ${questionNumber}`);
    console.log(event.target.textContent)
    if (event.target.textContent === questionArray[questionNumber].answer){
       console.log("correct")
       questionNumber++;
       questionChange(questionNumber)
       buttonText(questionNumber)
    } else {
        seconds = seconds-5;
        console.log("Wrong.");
    }
}

function questionChange(number) {
    if (questionNumber<questionArray.length){
        questionEl.innerHTML =(`<p>${questionArray[number].question}</p>`)
    } else {
        gameOver()
    }
    
}

let countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) {
        gameOver()
        clearInterval(countdown);
    }
    if (questionNumber>questionArray.length){
        clearInterval(countdown);
    }
}, 1000);

function gameOver(){
    let gameDoneEl = document.getElementById("games-done")
    gameDoneEl.setAttribute("style", "display:content")
}






questionChange(0)
buttonText(0)
















































































