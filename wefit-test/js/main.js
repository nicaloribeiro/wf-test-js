document.querySelector('.btn-group-vertical').classList.remove('btn-group-vertical')

const headerDiv = document.querySelector('.jumbotron')
headerDiv.style.alignItems = 'end'
headerDiv.style.textAlign = 'right'
headerDiv.style.color = 'white'
headerDiv.style.backgroundColor = '#6B757E'

const headerButton = headerDiv.querySelector('a')
headerButton.style.backgroundColor = '#27A844'
headerButton.style.border = 'none'

const cardsDiv = document.getElementsByClassName('row')[2]

const cardAnimais = cardsDiv.children[1]
const cardTecnologias = cardsDiv.children[2]
const cardPessoas = cardsDiv.children[3]
const cardNatureza = cardsDiv.children[4]

const cardAnimaisButton = cardsDiv.querySelector('a')
cardAnimaisButton.style.backgroundColor = '#27A844'
cardAnimaisButton.style.border = 'none'

const newCardOrder = [cardsDiv.children[0], cardNatureza, cardAnimais, cardPessoas, cardTecnologias]
cardsDiv.replaceChildren(...newCardOrder)

const listElement = document.querySelector('ul')
listElement.children[0].classList.remove('active')

const quartoItem = document.createElement('li')
quartoItem.classList.add('list-group-item', 'active')
quartoItem.appendChild(document.createTextNode('Quarto item'))
listElement.appendChild(quartoItem)

const quintoItem = document.createElement('li')
quintoItem.classList.add('list-group-item')
quintoItem.appendChild(document.createTextNode('Quinto item'))
listElement.appendChild(quintoItem)