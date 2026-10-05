const response = await fetch('/recipes')

const data = await response.json()

const recipes = data.recipes

console.log(recipes)

const main = document.querySelector('main')

recipes.forEach(recipe => {

    const div = document.createElement('div')

    div.classList.add('listing')

    const title = document.createElement('h2')
    title.textContent = recipe.name || recipe.title || 'Recipe'

    const description = document.createElement('p')
    description.textContent = recipe.description

    div.appendChild(title)
    div.appendChild(description)

    main.appendChild(div)

})
