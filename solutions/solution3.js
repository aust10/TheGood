console.log('solution3')

const flavors = window.window.iceCreamFlavors

const iceCreamList = document.getElementsByClassName('ice-cream-list')[0]

flavors.map(item => {
  const items = document.createElement('li')
  items.innerText = item
  iceCreamList.appendChild(items)
})

const headline = document.createElement('h2')
headline.setAttribute('id', 'headline')
headline.innerHTML = 'Solution3'
document.body.insertBefore(headline, iceCreamList)
