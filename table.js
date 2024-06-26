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
    table.style.color="blue"
    bLogout.style.color='blue'
    bAbout.style.color='blue'
    bLogout.style.borderColor='blue'
    bAbout2.style.color='blue'
    saveColors('url(./תמונות/בהיר.png)', 'blue')
}


function darkDesign(){
    document.body.style.backgroundImage='url(./תמונות/נצנצים.png)'
    footer.style.color="white"
    table.style.color="white"
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
    table.style.color=text
    bLogout.style.color=text
    bAbout.style.color=text
    bLogout.style.borderColor=text
    bAbout2.style.borderColor=text
    saveColors(back, text)

}

function logout(){
	window.location = './set.html'
}


//    //שמירת השיאים//
// let date= (new Date().getDate())+'/'+(new Date().getMonth())+'/'+(new Date().getFullYear())

// let highs = [{s:5, u:'A', d: date},
//              {s:4, u:'B', d: date},
//              {s:7, u:'C', d: date},
//              {s:8, u:'D', d: date},
//              {s:5, u:'E', d: date}
//             ]

// //שמירת מערך השיאים במשתנה 
// localStorage.setItem('highs', highs)
// highs=localStorage.getItem('highs')
// console.log(highs)


const table = document.createElement('table')

const headerRow = document.createElement('tr')
const dateHeader = document.createElement('th')
dateHeader.textContent = 'DATE';
headerRow.appendChild(dateHeader);

const nameHeader = document.createElement('th')
nameHeader.textContent = 'NAME';
headerRow.appendChild(nameHeader);

const successesHeader = document.createElement('th')
successesHeader.textContent = 'SUCCESSES'
headerRow.appendChild(successesHeader)

table.appendChild(headerRow)

let records = JSON.parse(localStorage.getItem('records2'))
console.log(records)

for (let i = 0; i < 5; i++) {
  let row = document.createElement('tr')

  let dateCell = document.createElement('td')
  dateCell.textContent =  records[i].date
  row.appendChild(dateCell)

  let nameCell = document.createElement('td')
  nameCell.textContent = records[i].user
  row.appendChild(nameCell)

  const successesCell = document.createElement('td')
  successesCell.textContent = records[i].succ
  row.appendChild(successesCell)
  table.appendChild(row)
}


document.body.appendChild(table)

table.style.border = '1px solid rgba(0, 0, 0, 0.2)'
table.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'
table.style.width = '40%'
table.style.margin = '0 auto'
table.style.backgroundColor = 'transparent'
table.style.marginTop='100px'
table.style.textAlign='center'
table.style.fontSize='35px'

const th = table.getElementsByTagName('th')
for (let i = 0; i < th.length; i++) {
  th[i].style.border = '1px solid rgba(0, 0, 0, 0.2)'
  th[i].style.padding = '8px'
  th[i].style.textAlign = 'left'
  th[i].style.backgroundColor = '#f2f2f2'
  th[i].style.color = '#555'
  th[i].style.fontWeight = 'bold'
}

const td = table.getElementsByTagName('td')
for (let i = 0; i < td.length; i++) {
  td[i].style.border = '1px solid rgba(0, 0, 0, 0.2)'
  td[i].style.padding = '8px'
  td[i].style.verticalAlign = 'middle'
  td[i].style.backgroundColor = '#fff'
  td[i].style.color = '#555'
}

document.body.style.backgroundColor = 'pink'













// let table = document.createElement('table')
// let headerRow = document.createElement('tr')

// let dateHeader = document.createElement('th')
// dateHeader.textContent = 'DATE'
// headerRow.appendChild(dateHeader)

// let nameHeader = document.createElement('th')
// nameHeader.textContent = 'NAME'
// headerRow.appendChild(nameHeader)

// let successesHeader = document.createElement('th')
// successesHeader.textContent = 'SUCCESSES'
// headerRow.appendChild(successesHeader)

// table.appendChild(headerRow)


// for (let i = 0; i < 5; i++) {
//   let row = document.createElement('tr')

//   let dateCell = document.createElement('td')
//   dateCell.textContent =  highs[i].d
//   row.appendChild(dateCell)

//   let nameCell = document.createElement('td')
//   nameCell.textContent = highs[i].u
//   row.appendChild(nameCell)

//   const successesCell = document.createElement('td')
//   successesCell.textContent = highs[i].s
//   row.appendChild(successesCell)

//   // add data row to table
//   table.appendChild(row)
// }

// // add table to the document
// document.body.appendChild(table)

// // add CSS styling to the table
// table.style.border = '1px solid rgba(0, 0, 0, 0.2)'
// table.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'
// table.style.width = '40%'
// table.style.margin = '0 auto'
// table.style.backgroundColor = 'transparent'
// table.style.marginTop='200px'
// table.style.textAlign='center'
// table.style.fontSize='35px'

// const th = table.getElementsByTagName('th')
// for (let i = 0; i < th.length; i++) {
//   th[i].style.border = '1px solid rgba(0, 0, 0, 0.2)'
//   th[i].style.padding = '8px'
//   th[i].style.textAlign = 'left'
//   th[i].style.backgroundColor = '#f2f2f2'
//   th[i].style.color = '#555'
//   th[i].style.fontWeight = 'bold'
// }

// const td = table.getElementsByTagName('td')
// for (let i = 0; i < td.length; i++) {
//   td[i].style.border = '1px solid rgba(0, 0, 0, 0.2)'
//   td[i].style.padding = '8px'
//   td[i].style.verticalAlign = 'middle'
//   td[i].style.backgroundColor = '#fff'
//   td[i].style.color = '#555'
// }

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
