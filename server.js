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

        console.log(data)

        res.json(data)

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