const quizdata=[
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What deoes CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What deoes HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was Javvascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

   let quiz=document.getElementById('quiz')
   let questionHeading=document.getElementById('questionHeading')
   let optionList=document.querySelectorAll('.optionList')
   console.log(optionList)
   let aoption=document.getElementById('aoption')
   let boption=document.getElementById('boption')
   let coption=document.getElementById('coption')
   let doption=document.getElementById('doption')
   let submitBtn=document.getElementById('submitBtn')
   let currentQuizCount=0;
   let score=0;
     loadQuiz()
   function loadQuiz(){
    deSelectOption()
    let currentQuizData=quizdata[currentQuizCount]
    console.log(currentQuizData)
    questionHeading.innerText=currentQuizData.question
    aoption.innerText=currentQuizData.a;
    boption.innerText=currentQuizData.b;
    coption.innerText=currentQuizData.c;
    doption.innerText=currentQuizData.d;
   }
   function deSelectOption(){
    optionList.forEach((element)=>element.checked=false)
   }

   function getSelected(){
    let selectedAnswered;
    optionList.forEach((element)=>{
         if(element.checked){
            selectedAnswered=element.id
            console.log(element.id)
         }      
    })
    return selectedAnswered
   }

   submitBtn.addEventListener('click',()=>{
    let answer=getSelected()
    console.log(answer)
    if(answer){
        if(answer===quizdata[currentQuizCount].correct){
            score++;
        }
        currentQuizCount++;
        if(currentQuizCount<quizdata.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>You Scored ${score}/${quizdata.length}</h2>
            <button class='submit' onclick=location.reload()>Reload</button>
            `
        }
    }
   })
