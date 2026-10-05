import express from 'express'

const app = express()
const PORT = 3000

// Serve everything inside the public folder
app.use(express.static('public'))


// Route used by your frontend to get recipes
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

        res.json(data)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Could not load recipes'
        })
    }
})


// Route for getting one individual recipe
app.get('/recipes/:id', async (req, res) => {

    try {

        const recipeId = req.params.id

        const response = await fetch(
            `https://api.tinyplates.dev/recipes/${recipeId}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TINYPLATES_API_KEY}`
                }
            }
        )

        const data = await response.json()

        res.json(data)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            error: 'Could not load recipe'
        })
    }
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})