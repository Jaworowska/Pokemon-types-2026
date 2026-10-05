const response = await fetch('/recipes')

const data = await response.json()

const recipes = data.recipes

const main = document.querySelector('main')

console.log('recipes:', recipes)
console.log('main:', main)

recipes.forEach(recipe => {

    const card = document.createElement('div')

    card.className = 'listing'

    const title = document.createElement('h2')
    title.textContent = recipe.name || recipe.title || 'Recipe'

    const description = document.createElement('p')
    description.textContent = recipe.description || 'No description'

    card.appendChild(title)
    card.appendChild(description)

    main.appendChild(card)

})

console.log('cards on page:', document.querySelectorAll('.listing').length)