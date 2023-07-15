


const q11 = {
    text: "I don't know",
    point: 0
}
const q12 = {
    text: "Im' the JEB",
    point: 1
}
const q13 = {
    text: 'I love Jeb',
    point: 0
}
const q14 = {
    text: 'I think you are the Jeb',
    point: 0
}


const q1text = 
{  number: 1,
    text: 'what is a Jeb?'
}
const q1opt = [ q11, q12, q13, q14]

const question1 = [q1text, q1opt]


const q21 = {
    text: "I don't know",
    point: 1
}
const q22 = {
    text: "Im' the JEB",
    point: 0
}
const q23 = {
    text: 'I love Jeb',
    point: 0
}
const q24 = {
    text: 'I think you are the Jeb',
    point: 0
}


const q2text = 
{  number: 2,
    text: 'top reason why I am not a Jeb?'
}
const q2opt = [ q11, q12, q13, q14]
const question2 = [q2text, q2opt]

var quizPool = [question1, question2]
//load in the question set 

var butt = document.getElementById('startBut')
butt.addEventListener('click', () => triggerNextSlid())
//button start!

var i = 0;
function printQuestionText(){
    texttext[0].innerHTML = quizPool[i][0].text
}
//questionTextChange

function appendOptions(){
    const yepTheContainer = document.getElementsByClassName('container')
    const option1 = document.createElement('button')
    option1.classList.add('option')
    option1.classList.add('option1')
    //gen new element
    const opt1Text = document.createTextNode(quizPool[i][1][0].text)
    //gen content
    option1.appendChild(opt1Text)
    yepTheContainer[0].appendChild(option1)

    const option2 = document.createElement('button')
    option2.classList.add('option')
    option2.classList.add('option2')
    //gen new element
    const opt2Text = document.createTextNode(quizPool[i][1][1].text)
    //gen content
    option2.appendChild(opt2Text)
    yepTheContainer[0].appendChild(option2)

    const option3 = document.createElement('button')
    option3.classList.add('option')
    option3.classList.add('option3')
    //gen new element
    const opt3Text = document.createTextNode(quizPool[i][1][2].text)
    //gen content
    option3.appendChild(opt3Text)
    yepTheContainer[0].appendChild(option3)

    const option4 = document.createElement('button')
    option4.classList.add('option')
    option4.classList.add('option4')
    //gen new element
    const opt4Text = document.createTextNode(quizPool[i][1][3].text)
    //gen content
    option4.appendChild(opt4Text)
    yepTheContainer[0].appendChild(option4)
}
//checking stuff
console.log(`Chekcing stuff${quizPool[i][1][3].text}`)
var texttext = document.getElementsByClassName('question')

//operation function
function triggerNextSlid(){
    clearStartBut()
    console.log(quizPool[i],i,quizPool)
    printQuestionText()
    appendOptions()
    //more stuff goes in here
    switch(i=0){
        case false:
            clearOpt()
    }
    i += 1

}


function clearStartBut(){
    butt.remove()
}

function clearOpt(){
    option1.remove()
    option2.remove()
    option3.remove()
    option4.remove()
}
console.log(`this is question 2 ${quizPool[1],quizPool}`)

function assignEvLisner(){
    let allOptions = document.getElementsByClassName('option')
    console.log(allOptions)
    for(let i =0; i=4; i++){
        console.log(allOptions[i])
        allOptions[i].addEventListener('click',testRightCheck)
}
}
//test right answer

function testRightCheck(){
    console.log('yeo yep')
}



