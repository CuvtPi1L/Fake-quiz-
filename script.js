


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
//that was quesiton 1

const q41 = {
    text: "I like my mother",
    point: 0
}
const q42 = {
    text: "she is very nice",
    point: 0
}
const q43 = {
    text: 'I miss her a lot',
    point: 0
}
const q44 = {
    text: '35',
    point: 1
}

const q4text = 
{  number: 4,
    text: 'what is 5 times 7?'
}
const q4opt = [ q41, q42, q43, q44]

const question4 = [q4text, q4opt]
//this is euestion 3

const q31 = {
    text: "JaveScript Sucks!",
    point: 0
}
const q32 = {
    text: "Im' the JEB",
    point: 0
}
const q33 = {
    text: 'I dont really know',
    point: 0
}
const q34 = {
    text: 'Yes I do!',
    point: 1
}
const q3text = 
{  number: 3,
    text: 'Do you love JavaScript?'
}
const q3opt = [q31, q32, q33, q34]

const question3 = [q3text, q3opt]

//question two

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

var quizPool = [question1, question2,question3, question4]
console.log(quizPool)
//load in the question set 

var butt = document.getElementById('startBut')
butt.addEventListener('click', () => triggerNextSlid())
//button start!

var i = 0;
function printQuestionText(){
    texttext[0].innerHTML = quizPool[i][0].text
}
//questionTextChange
const yepTheContainer = document.getElementsByClassName('container')
function appendOptions(){
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
    console.log(`i, are ${i}`)
    printQuestionText()
    appendOptions()
    //more stuff goes in here
  
    assignEvLisner()
    console.log( `this would be quiz bowl's length and that would be ${quizPool.length}`)
    
            i+=1  
    
    
}


function endResult(){
    //shows your score and log your name
    console.log('game ends!!!!!!!!!!!!!!!!!!')
    let theGuyName = prompt('what is you name!')
    window.localStorage.setItem(theGuyName, wrongNum)
    
}

function clearStartBut(){
    butt.remove()
}

function clearOpt(){
    for(jeb = 0; jeb<4; jeb++){
    allOptions[0].remove()
    }
   
    }
   
var allOptions = document.getElementsByClassName('option')
var optionPressed =''
function assignEvLisner(){
    console.log(allOptions)
     allOptions[0].addEventListener('click', 
        () => { optionPressed = 0;
            console.log(`optionPressed is ${optionPressed}`)
            testRightCheck()})
     allOptions[1].addEventListener('click',
        () => { optionPressed = 1;
            console.log(`optionPressed is ${optionPressed}`)
            testRightCheck()})
     allOptions[2].addEventListener('click',
        () => { optionPressed = 2;
            console.log(`optionPressed is ${optionPressed}`)
            testRightCheck()})
     allOptions[3].addEventListener('click',
        () => { optionPressed = 3;
                console.log(`optionPressed is ${optionPressed}`)
                testRightCheck()})
}


//test right answer
var wrongNum = 0
let wrongwrongText = 'wrong! try again!';
let removeWrongText = document.getElementsByClassName('wrong')

function testRightCheck(){

    switch( i == quizPool.length ){
        case true:
            endResult()
        return}
    console.log(`point is
             ${quizPool[i][1][optionPressed].point}`)
    switch(quizPool[i][1][optionPressed].point == 1){
        case true:
            clearOpt()
            triggerNextSlid()
        case false:
            // switch( i == 1){
            //     case false:
                    
                    console.log(i)
                    wrongNum += 1
                    let CheckText = document.createElement('div')
                CheckText.classList.add('wrong')
                CheckText.append(wrongwrongText)
                yepTheContainer[0].append(CheckText)
            }
            
            
    console.log(`wrongNum is ${wrongNum}`)}




