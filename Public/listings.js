const createListings = (recipes) => {

    const courses = [
        ...new Set(
            recipes.flatMap(recipe => recipe.courses || [])
        )
    ]

    courses.forEach(course => {

        const section = document.createElement('section')

        section.classList.add(course)

        const matchingRecipes = recipes.filter(recipe => {

            return recipe.courses?.includes(course)

        })

        matchingRecipes.forEach(recipe => {

            const div = document.createElement('div')

            div.classList.add('listing')

            const template = `
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
            `

            div.innerHTML = DOMPurify.sanitize(template)

            section.appendChild(div)

        })

        document.querySelector('main')
            .appendChild(section)

    })

}

export { createListings }