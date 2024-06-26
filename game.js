document.body.style.backgroundColor="black"
document.body.style.height="auto"
document.body.style.width="100%"

let header=document.createElement('header')
document.body.appendChild(header)
header.style.height="100px"
header.style.width="100%"


//צבע הרקע
function saveColors(background, text) {
    localStorage.setItem('background', background)
    localStorage.setItem('text', text)
}

function loadColors() {
  let background = localStorage.getItem('background')
  let text = localStorage.getItem('text')
  console.log(background)
  console.log(text)
  if (background && text) {
  if(background==='url(./תמונות/נצנצים.png)')
    darkDesign()
  else if(background==='url(./תמונות/בהיר.png)')
      brightDesign()
    else
          color(background, text)
  }
}

let designButtons=document.createElement('div')
header.appendChild(designButtons)

//כפתור התנתקות
let bLogout=document.createElement('a')
header.appendChild(bLogout)
bLogout.innerHTML='LogOut'
bLogout.addEventListener('click',logout)
bLogout.style.float="right"
bLogout.style.width='60px'
bLogout.style.textAlign='center'
bLogout.style.height="25px"
bLogout.style.marginRight='10px'
bLogout.style.margin="5px"
bLogout.style.marginTop="15px"
bLogout.style.cursor = 'pointer'
bLogout.style.background = 'none'
bLogout.style.color="white"
bLogout.style.border="white solid 2px"

//כפתור אודות
let bAbout=document.createElement('a')
header.appendChild(bAbout)
bAbout.innerHTML='About SET'
bAbout.addEventListener('click',about)
bAbout.style.float="right"
bAbout.style.width='100px'
bAbout.style.height="25px"
bAbout.style.fontSize="20px"
bAbout.style.padding="15px"
bAbout.style.marginRight='7px'
bAbout.style.margin="5px"
bAbout.style.cursor = 'pointer'
bAbout.style.color="white"

let bAbout2=document.createElement('a')
header.appendChild(bAbout2)
bAbout2.innerHTML='records'
bAbout2.addEventListener('click',record)
bAbout2.style.float="right"
bAbout2.style.width='100px'
bAbout2.style.height="25px"
bAbout2.style.fontSize="20px"
bAbout2.style.padding="15px"
bAbout2.style.marginRight='7px'
bAbout2.style.margin="5px"
bAbout2.style.cursor = 'pointer'
bAbout2.style.color="white"

function record(){
    window.location= './table.html'
}
function about(){
    window.location = './about.html'
}


//עיצוב הרקע
let white=document.createElement('button')
designButtons.appendChild(white)
white.innerHTML='white'
white.style.backgroundColor="white"
white.style.color="red"
white.addEventListener('click',color.bind(null,'white','red'))
white.style.float="left"
white.style.margin="5px"
white.style.width='80px'
white.style.height="40px"
white.style.borderColor="red"

let black=document.createElement('button')
designButtons.appendChild(black)
black.innerHTML='black'
black.style.backgroundColor="black"
black.style.color="white"
black.addEventListener('click',color.bind(null,'black','white'))
black.style.float="left"
black.style.margin="5px"
black.style.width='80px'
black.style.height="40px"
black.style.borderColor="white"

let glitter=document.createElement('button')
designButtons.appendChild(glitter)
glitter.innerHTML='Dark design'
glitter.style.backgroundImage='url(./תמונות/נצנצים.png)'
glitter.style.color="white"
glitter.addEventListener('click',darkDesign)
glitter.style.float="left"
glitter.style.margin="5px"
glitter.style.width='80px'
glitter.style.height="40px"
glitter.style.borderColor="white"

let bright=document.createElement('button')
designButtons.appendChild(bright)
bright.innerHTML='Bright design'
bright.style.backgroundImage='url(./תמונות/בהיר.png)'
bright.style.color="blue"
bright.addEventListener('click',brightDesign)
bright.style.float="left"
bright.style.margin="5px"
bright.style.width='80px'
bright.style.height="40px"
bright.style.border='none'
bright.style.borderColor="blue"

// let div=document.createElement('div')
// designButtons.appendChild(div)


//ספירה לאחור
let currentDate = new Date()
let timer=document.createElement('div')
timer.id='timer'
header.appendChild(timer)
timer.setAttribute('height','200px')
timer.setAttribute('width','200px')
timer.style.color='white'
timer.style.marginLeft='700px'

timer.style.fontSize='30px'

let countDownDate = new Date(currentDate.getTime() + 60000)

let x = setInterval(function() {

  let now = new Date().getTime()
    
  let distance = countDownDate - now
  


  let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
  document.getElementById("timer").innerHTML = seconds + "s "
    
  if (distance < 0) {
    clearInterval(x)
    document.getElementById("timer").innerHTML = "Time's over!"
  }
}, 1000)



let usernameHi1 = localStorage.getItem('activeUser')
let usernameHiJson=localStorage.getItem(usernameHi1)
let usernameHi=JSON.parse(usernameHiJson)
// console.log(username)
let hello = document.createElement('div')
hello.innerHTML = 'Hi ' + usernameHi.userName + '!'
header.appendChild(hello)
hello.style.textAlign = 'center'
hello.style.width = '200px'
hello.style.height = '50px'
hello.style.fontSize = '35px'
hello.style.float = 'left'
hello.style.color = 'white'
hello.style.marginLeft='200px'
hello.style.marginTop='40px'


function brightDesign(){
    document.body.style.backgroundImage='url(./תמונות/בהיר.png)'
    successes.style.color='blue'
    failures.style.color='blue'
    hello.style.color='blue'
    footer.style.color='blue'
	bAbout.style.color="blue"
	bLogout.style.color="blue"
	bLogout.style.borderColor="blue"
    timer.style.color='blue'
    bAbout2.style.color='blue'
    saveColors('url(./תמונות/בהיר.png)', 'blue')
}


function darkDesign(){
    document.body.style.backgroundImage='url(./תמונות/נצנצים.png)'
    successes.style.color='white'
    failures.style.color='white'
    hello.style.color='white'
    footer.style.color='white'
    bAbout.style.color="white"
	bLogout.style.color="white"
	bLogout.style.borderColor="white"  
    bAbout2.style.borderColor='white'  
    timer.style.color='white'
    saveColors('url(./תמונות/נצנצים.png)', 'white')
}



function color(back, text){
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor=back
    successes.style.color=text
    failures.style.color=text
    hello.style.color=text
    footer.style.color=text
    bAbout.style.color=text
	bLogout.style.color=text
	bLogout.style.borderColor=text
    timer.style.color=text
    bAbout2.style.color=text
    saveColors(back, text)
}



function logout(){
	window.location = './set.html'
}

let section=document.createElement('div')
document.body.appendChild(section)
section.setAttribute('height','auto')
section.setAttribute('width','40%')
section.style.marginLeft="30%"
section.style.marginTop="30px"
section.style.display="grid"	
section.style.gridTemplateColumns = "repeat(3, 150px)"
section.style.gridTemplateRows = "repeat(3, 150px)"
section.style.gridGap = "20px"

let sCounter=0
let successes=document.createElement('div')
document.body.appendChild(successes)
successes.id='successes'
successes.style.marginLeft="90%"
successes.style.marginTop="10px"
successes.style.position='absolute'
successes.style.top='100px'
successes.style.right='10%'
successes.style.height='100px'
successes.style.width='100px'
successes.style.textAlign='center'
successes.style.fontSize='30px'
successes.innerHTML="Sets: " +sCounter
successes.style.color="white"

let fCounter=0
let failures=document.createElement('div')
document.body.appendChild(failures)
failures.id='failures'
failures.style.marginLeft="90%"
failures.style.marginTop="10px"
failures.style.position='absolute'
failures.style.top='200px'
failures.style.right='10%'
failures.style.height='100px'
failures.style.width='130px'
failures.style.textAlign='center'
failures.style.fontSize='30px'
failures.innerHTML="Failures: "+fCounter
failures.style.color="white"


let footer = document.createElement('footer')
document.body.appendChild(footer)
footer.style.height = '50px'
footer.style.width = '100%'
footer.innerHTML = 'By: <br> Esther Friedman 0548405215 estherf5215@gmail.com'
+' <br> Noa Katz 0583210465 noakatz465@gmail.com'
footer.style.fontSize = '15px'
footer.style.color = 'white'
footer.style.padding='40px'
footer.style.position = 'fixed'
footer.style.bottom = '0'
footer.style.left = '0'


let cards = [
    {id: 0, card: "./תמונות/1.png", fill: "full", shape: "square", color: "yellow", isUsed: false, isSet: false},
    {id: 1, card: "./תמונות/2.png", fill: "full", shape: "square", color: "pink", isUsed: false, isSet: false},
    {id: 2, card: "./תמונות/3.png", fill: "full", shape: "square", color: "blue", isUsed: false, isSet: false},
    {id: 3, card: "./תמונות/4.png", fill: "empty", shape: "square", color: "yellow", isUsed: false, isSet: false},
    {id: 4, card: "./תמונות/5.png", fill: "empty", shape: "square", color: "pink", isUsed: false, isSet: false},
    {id: 5, card: "./תמונות/6.png", fill: "empty", shape: "square", color: "blue", isUsed: false, isSet: false},
    {id: 6, card: "./תמונות/7.png", fill: "striped", shape: "square", color: "yellow", isUsed: false, isSet: false},
    {id: 7, card: "./תמונות/8.png", fill: "striped", shape: "square", color: "pink", isUsed: false, isSet: false},
    {id: 8, card: "./תמונות/9.png", fill: "striped", shape: "square", color: "blue", isUsed: false, isSet: false},
    {id: 9, card: "./תמונות/10.png", fill: "full", shape: "circle", color: "yellow", isUsed: false, isSet: false},
    {id: 10, card: "./תמונות/11.png", fill: "full", shape: "circle", color: "pink", isUsed: false, isSet: false},
    {id: 11, card: "./תמונות/12.png", fill: "full", shape: "circle", color: "blue", isUsed: false, isSet: false},
    {id: 12, card: "./תמונות/13.png", fill: "empty", shape: "circle", color: "pink", isUsed: false, isSet: false},
    {id: 13, card: "./תמונות/14.png", fill: "empty", shape: "circle", color: "blue", isUsed: false, isSet: false},
    {id: 14, card: "./תמונות/15.png", fill: "empty", shape: "circle", color: "yellow", isUsed: false, isSet: false},
    {id: 15, card: "./תמונות/16.png", fill: "striped", shape: "circle", color: "yellow", isUsed: false, isSet: false},
    {id: 16, card: "./תמונות/17.png", fill: "striped", shape: "circle", color: "blue", isUsed: false, isSet: false},
    {id: 17, card: "./תמונות/18.png", fill: "striped", shape: "circle", color: "pink", isUsed: false, isSet: false},
    {id: 18, card: "./תמונות/19.png", fill: "full", shape: "triangle", color: "blue", isUsed: false, isSet: false},
    {id: 19, card: "./תמונות/20.png", fill: "full", shape: "triangle", color: "yellow", isUsed: false, isSet: false},
    {id: 20, card: "./תמונות/21.png", fill: "full", shape: "triangle", color: "pink", isUsed: false, isSet: false},
    {id: 21, card: "./תמונות/22.png", fill: "empty", shape: "triangle", color: "blue", isUsed: false, isSet: false},
    {id: 22, card: "./תמונות/23.png", fill: "empty", shape: "triangle", color: "pink", isUsed: false, isSet: false},
    {id: 23, card: "./תמונות/24.png", fill: "empty", shape: "triangle", color: "yellow", isUsed: false, isSet: false},
    {id: 24, card: "./תמונות/25.png", fill: "striped", shape: "triangle", color: "yellow", isUsed: false, isSet: false},
    {id: 25, card: "./תמונות/26.png", fill: "striped", shape: "triangle", color: "pink", isUsed: false, isSet: false},
    {id: 26, card: "./תמונות/27.png", fill: "striped", shape: "triangle", color: "blue", isUsed: false, isSet: false}
]

let clickSound = new Audio()
clickSound.src = './button click sound.mp3'
clickSound.preload = 'auto'

let counter=0
let rnd=0
let nineCards=[]
for (let i = 0; i <9; i++) {
    const image=document.createElement("img")
    rnd=Math.floor(Math.random()*cards.length)
    if (counter==27)
        break
    while(cards[rnd].isUsed)
        rnd=Math.floor(Math.random()*cards.length)
    image.src=cards[rnd].card
    image.style.width="100%"
    image.style.height="100%"
    image.style.borderRadius="5%"
    image.style.border="2px solid black"
    image.setAttribute('id',rnd)
    image.addEventListener('click', newSet.bind(null,rnd))
    section.appendChild(image)
    cards[rnd].isUsed=true
    nineCards[i]=rnd
    counter++
}

const selectedCards=[]
let nineCardsIndex=[]

function newSet(currentCard){
    if(cards[currentCard].isSet==false){
        cards[currentCard].isSet=true
        clickSound.play()
        let card=document.getElementById(currentCard)
        card.style.transform = 'scale(1.05)'
        selectedCards.push(currentCard)
        nineCardsIndex.push(nineCards.indexOf(currentCard))
        if(selectedCards[2]!=null){
            if((cards[selectedCards[0]].fill==cards[selectedCards[1]].fill && cards[selectedCards[0]].fill==cards[selectedCards[2]].fill)||
                (cards[selectedCards[0]].fill!=cards[selectedCards[1]].fill && cards[selectedCards[0]].fill!=cards[selectedCards[2]].fill && cards[selectedCards[1]].fill!=cards[selectedCards[2]].fill))
                if((cards[selectedCards[0]].color==cards[selectedCards[1]].color && cards[selectedCards[0]].color==cards[selectedCards[2]].color)||
                    (cards[selectedCards[0]].color!=cards[selectedCards[1]].color && cards[selectedCards[0]].color!=cards[selectedCards[2]].color && cards[selectedCards[1]].color!=cards[selectedCards[2]].color))
                    if((cards[selectedCards[0]].shape==cards[selectedCards[1]].shape && cards[selectedCards[0]].shape==cards[selectedCards[2]].shape)||
                        (cards[selectedCards[0]].shape!=cards[selectedCards[1]].shape && cards[selectedCards[0]].shape!=cards[selectedCards[2]].shape && cards[selectedCards[1]].shape!=cards[selectedCards[2]].shape)){
                            sCounter++
                            successes.innerHTML="Sets: " +sCounter
                            console.log(true)
                            let image1=document.getElementById(selectedCards[0])
                            image1.style.display='none'
                            let image2=document.getElementById(selectedCards[1])
                            image2.style.display='none'
                            let image3=document.getElementById(selectedCards[2])
                            image3.style.display='none'
                            selectedCards.length=0
                            for(let j=0; j<3; j++){
                                const image=document.createElement("img")
                                rnd=Math.floor(Math.random()*cards.length)
                                if (counter==27)
                                    break
                                while(cards[rnd].isUsed)
                                    rnd=Math.floor(Math.random()*cards.length)
                                image.src=cards[rnd].card
                                image.style.width="100%"
                                image.style.height="100%"
                                image.style.borderRadius="5%"
                                image.style.border="2px solid black"
                                image.setAttribute('id',rnd)
                                image.addEventListener('click', newSet.bind(null,rnd))
                                section.appendChild(image)
                                cards[rnd].isUsed=true
                                nineCards[nineCardsIndex[j]]=rnd
                                nineCardsIndex.length=0
                                counter++
                            }
                            return
            }
        fCounter++
        cards[selectedCards[0]].isSet=false
        cards[selectedCards[1]].isSet=false
        cards[selectedCards[2]].isSet=false
        failures.innerHTML="Failures: "+fCounter
        console.log(false) 
        let image1=document.getElementById(selectedCards[0])
        let image2=document.getElementById(selectedCards[1])
        let image3=document.getElementById(selectedCards[2])
        image1.style.transform = 'scale(1)'
        image2.style.transform = 'scale(1)'
        image3.style.transform = 'scale(1)'
        selectedCards.length=0
        nineCardsIndex.length=0
    }}
}

setTimeout(function() {
    console.log(sCounter)
    localStorage.setItem('sCounter',sCounter)
    section.style.display="none"
    successes.style.display="none"
    failures.style.display="none"
    const message = document.createElement('div')
    message.setAttribute('id','message')
    if(sCounter==9 && fCounter==0)
        message.innerHTML = ` You found all the sets!! 👌🤩`
    else if(fCounter==0 && sCounter==0) 
            message.innerHTML = ` Try again next time...🤞`
         else if(fCounter==0)
                message.innerHTML = ` You found : ${sCounter}  sets 😊`
              else
                message.innerHTML = ` You found : ${sCounter}  sets 😊<br>You missed : ${fCounter}  times 😞`
    document.body.appendChild(message)
    message.style.color="white"
    message.style.fontSize="50px"
    message.style.textAlign="center"
    message.style.marginTop="200px"
    message.style.marginLeft="32.5%"
    message.style.width='35%'
    message.style.height='150px'
    message.style.backgroundColor='black'
    message.style.borderRadius="20px"
    message.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.5)";


    // עיצוב 3---
    // message.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de'
   
    // עיצוב 2---
    // message.style.background = '-webkit-linear-gradient(-45deg, #ff0000, #00ff00)';
    // message.style.webkitBackgroundClip = 'text';
    // message.style.webkitTextFillColor = 'transparent';

    //עיצוב 1---
    message.style.animation = 'pulse 2s infinite'
    const pulse = `@keyframes pulse {
      0% {
        transform: scale(1)
      }
      50% {
        transform: scale(1.2)
      }
      100% {
        transform: scale(1)
      }
    }`
    const style = document.createElement('style')
    style.innerHTML = pulse
    document.head.appendChild(style)
        // console.log(localStorage.getItem('sCounter'))

        let sCounter1=localStorage.getItem('sCounter')
        // console.log(sCounter1)
        let records1Json=localStorage.getItem('records2')
        // console.log(records1Json)
        if (records1Json == null) {
            let high = [{user: localStorage.getItem('activeUser'), succ: sCounter1,
                date: (new Date().getDate())+'/'+(new Date().getMonth())+'/'+(new Date().getFullYear())
                }]
            console.log(high)
       
            localStorage.setItem("records2", JSON.stringify(high))
          }
          else{
            let records1List=JSON.parse(records1Json)
            // let userNameActive=localStorage.getItem('activeUser')
            // let userName2=userName2Json
            let high={user: localStorage.getItem('activeUser'), succ: sCounter1,
            date: (new Date().getDate())+'/'+(new Date().getMonth())+'/'+(new Date().getFullYear())
            }
            records1List.push(high)
            records1List.sort(function (a, b) {
            return b.succ - a.succ
            })
            records1List.splice(5)
            localStorage.setItem("records2", JSON.stringify(records1List))
    }
  }, 10000)


  loadColors()

