const createNavigation = (recipes) => {

    const courses = [
        ...new Set(
            recipes.flatMap(recipe => recipe.courses || [])
        )
    ]

    courses.forEach(course => {

        const button = document.createElement('button')

        button.className = course
        button.textContent = course

        button.addEventListener('click', () => {

            document.querySelectorAll('section')
                .forEach(section => {
                    section.classList.remove('active')
                })

            document.querySelectorAll(`section.${course}`)
                .forEach(section => {
                    section.classList.add('active')
                })

        })

        document.querySelector('nav')
            .appendChild(button)

    })

}

export { createNavigation }
