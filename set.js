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
glitter.addEventListener('click',darkDesign)
glitter.style.float="left"
glitter.style.margin="5px"
glitter.style.width='80px'
glitter.style.height="40px"
glitter.style.borderColor="white"

let bright=document.createElement('button')
header.appendChild(bright)
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

function brightDesign(){
    document.body.style.backgroundImage='url(./תמונות/בהיר.png)'
	h1.style.color="blue"
	h2.style.color="blue"
	footer.style.color="blue"
	bAbout.style.color="blue"
	bLogout.style.color="blue"
	bLogout.style.borderColor="blue"
	saveColors('url(./תמונות/בהיר.png)', 'blue')

}


function darkDesign(){
    document.body.style.backgroundImage='url(./תמונות/נצנצים.png)'
	h1.style.color="white"
	h2.style.color="white"
	footer.style.color="white"
	bAbout.style.color="white"
	bLogout.style.color="white"
	bLogout.style.borderColor="white"
	saveColors('url(./תמונות/נצנצים.png)', 'white')

}

function logout(){
	window.location = './set.html'
}

function color(back, text){
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor=back
	h1.style.color=text
	h2.style.color=text
	footer.style.color=text
	bAbout.style.color=text
	bLogout.style.color=text
	bLogout.style.borderColor=text
	saveColors(back, text)

}


let main = document.createElement('div')
document.body.appendChild(main)
main.setAttribute('id', 'main')
main.setAttribute('text-align', 'center')
main.style.textAlign = 'center'
main.style.marginTop = '150px'
main.style.height='350px'

let h1 = document.createElement('h1')
h1.innerHTML = 'Welcome!'
h1.style.color = 'white'

let h2 = document.createElement('h2')
h2.innerHTML = 'Please log in or create an acount to get started'
h2.style.color = 'white'

main.appendChild(h1)
main.appendChild(h2)

let bLogin = document.createElement('button')
bLogin.innerHTML = 'Log in'
main.appendChild(bLogin)
bLogin.addEventListener('click', loginForm)
bLogin.style.margin='8px'

let bNewAccount = document.createElement('button')
bNewAccount.innerHTML = 'Create an account'
main.appendChild(bNewAccount)
bNewAccount.addEventListener('click', CreateNewAccount)

function loginForm() {
  bLogin.style.display = 'none'
  bNewAccount.style.display = 'none'

  let form = document.createElement('form')
  form.setAttribute('id','form1')
  main.appendChild(form)

  let uName = document.createElement('input')
  form.appendChild(uName)
  uName.setAttribute('type', 'text')
  uName.setAttribute('placeholder', 'User Name')
  uName.setAttribute('required', 'true')
  uName.style.margin = '10px'

  let br = document.createElement('br')
  form.appendChild(br)

  let password = document.createElement('input')
  form.appendChild(password)
  password.setAttribute('required', 'true')
  password.setAttribute('type', 'password')
  password.style.margin = '10px'
  password.setAttribute('placeholder', 'Password')

  let br1 = document.createElement('br')
  form.appendChild(br1)

  let start = document.createElement('input')
  form.appendChild(start)
  start.setAttribute('type', 'submit')
  start.setAttribute('value', 'Start Game')
  start.style.margin = '10px'

  start.addEventListener('click', function (event) {
    event.preventDefault()
    let username = uName.value
    // let storedPassword =localStorage.getItem(username.password).password
    let storedJson =localStorage.getItem(username)
let storedD=JSON.parse(storedJson)
let password1=storedD.password
    // console.log(storedPassword)
    let enteredPassword = password.value
	if(username===''||enteredPassword==='')
		   alert('Fill in all the fields')	
	else{
    if (password1 === enteredPassword){
	  // localStorage.setItem('username', username)
      window.location = './game.html'
      localStorage.setItem('activeUser',username)
    }
	    else{
      		let form1=document.getElementById('form1')
	  		form1.style.display='none'
      		CreateNewAccount()
    		}
  }})}


function CreateNewAccount() {
  bLogin.style.display = 'none'
  bNewAccount.style.display = 'none'

  let form = document.createElement('form')
  form.setAttribute('id','form2')
  main.appendChild(form)

  let firstName = document.createElement('input')
form.appendChild(firstName)
firstName.setAttribute('type', 'text')
firstName.setAttribute('placeholder', 'First Name')
firstName.setAttribute('required', '')
firstName.style.margin = '10px'

let br4 = document.createElement('br')
form.appendChild(br4)

let lastName = document.createElement('input')
form.appendChild(lastName)
lastName.setAttribute('type', 'text')
lastName.setAttribute('placeholder', 'Last Name')
lastName.setAttribute('required', '')
lastName.style.margin = '10px'

let br5 = document.createElement('br')
form.appendChild(br5)

  let email = document.createElement('input')
  form.appendChild(email)
  email.setAttribute('required', 'true')
  email.setAttribute('type', 'email')
  email.style.margin = '10px'
  email.setAttribute('placeholder', 'email')

  let br = document.createElement('br')
  form.appendChild(br)

  let uName = document.createElement('input')
  form.appendChild(uName)
  uName.setAttribute('type', 'text')
  uName.setAttribute('placeholder', 'User Name')
  uName.setAttribute('required', 'true')
  uName.style.margin = '10px'

  let br3 = document.createElement('br')
  form.appendChild(br3)

  let password = document.createElement('input')
  form.appendChild(password)
  password.setAttribute('required', 'true')
  password.setAttribute('type', 'password')
  password.style.margin = '10px'
  password.setAttribute('placeholder', 'Password')

  let br1 = document.createElement('br')
  form.appendChild(br1)

  let newAccount = document.createElement('input')
  form.appendChild(newAccount)
  newAccount.setAttribute('type', 'submit')
  newAccount.setAttribute('value', 'Create an account')
  newAccount.setAttribute('required', 'true')
  newAccount.style.margin = '10px'

  newAccount.addEventListener('click', function (event) {
	event.preventDefault()
	let firstNameValue = firstName.value
	let lastNameValue = lastName.value
	let emailValue = email.value
	let passwordValue = password.value
	let username = uName.value
	let enteredPassword = password.value
	if(firstNameValue==''||lastNameValue===''||emailValue===''||passwordValue===''
		||username==='' ||enteredPassword==='')
		alert('Fill in all the fields')
	else{
    let userName1={userName:username, password:passwordValue}
    console.log(userName1)
    let userName1Json=JSON.stringify(userName1)
		localStorage.setItem(username, userName1Json)
		alert('The account was created successfully! Please log in to continue.')
		location.reload()}
  })
}

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
