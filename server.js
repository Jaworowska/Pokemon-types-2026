import express from 'express'

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/recipes', async (req, res) => {

    try {

        const response = await fetch(
            'https://api.tinyplates.dev/popular',
            {
                headers: {
                    Authorization: `Bearer ${process.env.TINYPLATES_API_KEY}`
                }
            }
        )

        const data = await response.json()

        let recipes = data.recipes

        // Get ?course= from the URL
        const course = req.query.course

        // If a course was selected, filter the recipes
        if (course && course !== 'all') {

            recipes = recipes.filter(recipe => {

                return recipe.courses?.includes(course)

            })

        }

        res.json({
            recipes: recipes
        })

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Could not load recipes'
        })
    }

})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})