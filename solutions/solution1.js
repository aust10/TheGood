console.log('solution1')

const flavors = window.iceCreamFlavors

const iceCreamList = document.getElementsByClassName('ice-cream-list')[0]

flavors.forEach(item => {
  const items = document.createElement('li')
  items.innerText = item
  iceCreamList.appendChild(items)
})

const headline = document.createElement('h2')
headline.setAttribute('id', 'headline')
headline.innerHTML = 'Solution1'
document.body.insertBefore(headline, iceCreamList)
