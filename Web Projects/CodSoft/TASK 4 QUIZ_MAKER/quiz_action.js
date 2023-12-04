const questions = [
    {
        question : "Who is prime minister of India?",
        answers: [
            {text:"Barack Oboma", correct:false},
            {text:"Vladimir Putin", correct:false},
            {text:"Narendra Modi", correct:true},
            {text:"Giorgia Meloni", correct:false}
        ]
    },
    {
        question : "What is National Animal of India?",
        answers: [
            {text:"Lion", correct:false},
            {text:"Cheetah", correct:false},
            {text:"Kangaroo", correct:false},
            {text:"Tiger", correct:true}
        ]
    },
    {
        question : "What is National bird of India?",
        answers: [
            {text:"parrot", correct:false},
            {text:"Peacock", correct:true},
            {text:"crow", correct:false},
            {text:"Eagle", correct:false}
        ]
    },
    {
        question : "What is National flower of India?",
        answers: [
            {text:"Brham Kamal", correct:true},
            {text:"Lotus", correct:false},
            {text:"Rose", correct:false},
            {text:"Sun-flower", correct:false}
        ]
    },
    {
        question : "What is National Anthem of India?",
        answers: [
            {text:"Vande-Matram", correct:false},
            {text:"Sare-jahan se acha", correct:false},
            {text:"Jan Gan Mana", correct:true},
            {text:"Mera desh mahan", correct:false}
        ]
    },
    {
        question : "Who wrote national anthem of India?",
        answers: [
            {text:"Ravindra Nath Tagore", correct:false},
            {text:"Nathuram Godse", correct:false},
            {text:"Bankim Chandra Chatterjee", correct:true},
            {text:"Subhash Chandra Bose", correct:false}
        ]
    },
    {
        question : "What is full form of SIM?",
        answers: [
            {text:"Subscriber Index Module", correct:true},
            {text:"Subscriber Identity Module", correct:false},
            {text:"Service Index Method", correct:false},
            {text:"Service Index Module", correct:false}
        ]
    },
    {
        question : "what is the full form of KYC?",
        answers: [
            {text:"Knowledge Your Customer", correct:false},
            {text:"Know Your Card", correct:false},
            {text:"Knowledege Your Card", correct:false},
            {text:"Know Your Customer", correct:true}
        ]
    },
    {
        question : "Who is prime minister of India?",
        answers: [
            {text:"Barack Oboma", correct:false},
            {text:"Vladimir Putin", correct:false},
            {text:"Narendra Modi", correct:true},
            {text:"Giorgia Meloni", correct:false}
        ]
    },
    {
        question : "Who is prime minister of India?",
        answers: [
            {text:"Barack Oboma", correct:false},
            {text:"Vladimir Putin", correct:false},
            {text:"Narendra Modi", correct:true},
            {text:"Giorgia Meloni", correct:false}
        ]
    }
]

const questele=document.getElementById("question");
const answerele=document.getElementById("answer-buttons");
const nextele=document.getElementById("next-btn");

let score=0,cidx=0;             // current question index is denoted as cidx.
function startquiz(){
    score=0,cidx=0;
    nextele.innerHTML="Next";
    showquestion();
}

function showquestion(){
    removeprious();
    let cquest=questions[cidx];
    let questno=cidx+1;
    questele.innerHTML=questno+". "+cquest.question;

    cquest.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerele.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function removeprious(){
    nextele.style.display="none";
    while(answerele.firstChild){
        answerele.removeChild(answerele.firstChild);
    }
}

function selectAnswer(e){
    const selectedbutton=e.target;
    const iscorrect=selectedbutton.dataset.correct=='true';

    if(iscorrect){
        selectedbutton.classList.add("correct");
        score++;
    }else{
        selectedbutton.classList.add("Incorrect");
    }

    Array.from(answerele.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextele.style.display="block";
}

function handlenextquestion(){
    cidx++;
    if(cidx<questions.length){
        showquestion();
    }else{
        removeprious();
        questele.innerHTML=`You scored ${score} out of ${questions.length}!`;
        nextele.innerHTML="Play Again";
        nextele.style.display="block";
    }
}

nextele.addEventListener("click",()=>{
    if(cidx<questions.length){
        handlenextquestion();
    }else startquiz();
});

startquiz();