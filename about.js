document.body.style.backgroundColor="black"
document.body.style.height="auto"
document.body.style.width="100%"


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


let header=document.createElement('header')
document.body.appendChild(header)
header.style.height="100px"
header.style.width="100%"

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



function about(){
    window.location = './about.html'
}

let bAbout2=document.createElement('a')
header.appendChild(bAbout2)
bAbout2.innerHTML='start game'
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
    window.location= './game.html'
}

let white=document.createElement('button')
header.appendChild(white)
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
header.appendChild(black)
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
header.appendChild(glitter)
glitter.innerHTML='Dark design'
glitter.style.backgroundImage='url(./תמונות/נצנצים.png)'
glitter.style.color="white"
glitter.style.borderColor="white"
glitter.addEventListener('click',darkDesign)
glitter.style.float="left"
glitter.style.margin="5px"
glitter.style.width='80px'
glitter.style.height="40px"

let bright=document.createElement('button')
header.appendChild(bright)
bright.innerHTML='Bright design'
bright.style.backgroundImage='url(./תמונות/בהיר.png)'
bright.style.color="blue"
bright.style.borderColor="blue"
bright.addEventListener('click',brightDesign)
bright.style.float="left"
bright.style.margin="5px"
bright.style.width='80px'
bright.style.height="40px"
bright.style.border='none'

function brightDesign(){
    document.body.style.backgroundImage='url(./תמונות/בהיר.png)'
    footer.style.color="blue"
    section.style.color="blue"
    bLogout.style.color='blue'
    bAbout.style.color='blue'
    bLogout.style.borderColor='blue'
    bAbout2.style.color='blue'
    saveColors('url(./תמונות/בהיר.png)', 'blue')
}


function darkDesign(){
    document.body.style.backgroundImage='url(./תמונות/נצנצים.png)'
    footer.style.color="white"
    section.style.color="white"
    bLogout.style.color='white'
    bAbout.style.color='white'
    bLogout.style.borderColor='white'
    bAbout2.style.borderColor='white'
    saveColors('url(./תמונות/נצנצים.png)', 'white')

}


function color(back, text){
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor=back
    footer.style.color=text
    section.style.color=text
    bLogout.style.color=text
    bAbout.style.color=text
    bLogout.style.borderColor=text
    bAbout2.style.borderColor=text
    saveColors(back, text)

}

function logout(){
	window.location = './set.html'
}


let section=document.createElement('section')
document.body.appendChild(section)
section.style.height='auto'
section.style.width='60%'
section.style.color='white'
section.style.marginLeft='20%'
section.style.fontSize='22px'
section.style.textAlign='center'
section.style.lineHeight = '1.5'
section.style.direction = 'rtl'
section.innerHTML='אודות SET: <br> 1. חפשו שלושה קלפים המרכיבים יחד "סט". סט מורכב משלושה כרטיסים, כל כרטיס מורכב משלושה קריטריונים: צורה, צבע ומילוי. כדי להרכיב סט צריך שכל קריטריון מהשלושה יהיה שווה או שונה בהתאמה בכל כרטיסי הסט.<br>'
+'לדוגמא: ריבוע כחול במילוי פסים, עיגול אדום במילוי פסים ומשולש צהוב במילוי פסים, יהוו סט תקין.<br>'
+' 2. לאחר שזיהית סט, לחץ על כל כרטיס כדי לבחור בו. אם הכרטיסים שבחרת אינם מהוים סט, תוכל להמשיך בחיפוש אחר סט אחר. כמובן שכל סט נכון שמצאת מזכה אותך בנקודה😊. <br>'
+'שים ❤️! גם הסטים השגויים ימוספרו, חשב את צעדיך בתשומת לב...<br>'
+' 3. המשחק מסתיים כשמצאת את כל הסטים או כשהזמן נגמר. <br>'
+'בהצלחה! 🤗<br>'
+'<br><br><br>  נועה כץ ואסתר פרידמן בנו את משחק הסט המקוון כדרך מהנה ומאתגרת למשתמשים לממש את כישורי זיהוי הדפוסים שלהם.'
+' הן התחילו בסיעור מוחות של רעיונות משחקים שונים והסכימו על הרעיון של משחק סט שמשתמש בצבע, צורה ומילוי כמאפיינים מגדירים. '
+' לאחר מכן, הן עיצבו את לוח המשחק ויצרו לוח קלפים עם שילובים שונים של צבעים, צורות ומילוי.'
+'<br>הן גם הוסיפו טיימר למשחק כדי להפוך אותו למאתגר יותר. '
+'לאחר שבדקו את המשחק וערכו התאמות, הן השיקו אותו באתר האינטרנט שלהם כדי שמשתמשים יוכלו לשחק.'
+'<br> הן ממשיכות לעקוב ולשפר את המשחק על סמך משוב משתמשים.'
+' נועה ואסתר נהנו מתהליך בניית משחק הסט המקוון והן גאות להציע אותו כפעילות מהנה ומושכת עבור מבקרי האתר שלהן.'



let footer = document.createElement('footer')
document.body.appendChild(footer)
footer.style.height = '50px'
footer.style.width = '100%'
footer.innerHTML = 'By: <br> Esther Friedman 0548405215 estherf5215@gmail.com'
+' <br> Noa Katz 0583210465 noakatz465@gmail.com'
footer.style.fontSize = '15px'
footer.style.color = 'white'
footer.style.padding='40px'

loadColors()
