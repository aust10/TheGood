console.log('solution2')

const flavors = window['iceCreamFlavors']

const iceCreamList = document.getElementsByClassName('ice-cream-list')[0]

for (let i = 0; i < flavors.length; i++) {
  const items = document.createElement('li')
  items.innerText = flavors[i]
  iceCreamList.appendChild(items)
}

const headline = document.createElement('h2')
headline.setAttribute('id', 'headline')
headline.innerHTML = 'Solution2'
document.body.insertBefore(headline, iceCreamList)
