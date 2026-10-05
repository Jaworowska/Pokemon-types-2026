import { createNavigation } from './navigation.js';
import { createListings } from './listings.js';

// fetch a simple list of all pokemon types (fighting, flying, etc.)
// This only includes the name and url for each.
const response = await fetch('https://api.tinyplates.dev/recipes')
const recipes = await response.json()

createNavigation(recipes)
createListings(recipes)

console.log('List of Recipes', recipes)

// Let's get more details for each of the types of pokemon
// this will include a list of member pokemon for each type  
// note the use of Promise.all to fetch all at once
const pokemonTypes = await Promise.all(
  json.results.map(async (pokemonType) => {
    const data = await fetch(pokemonType.url)
    return data.json()
  })
)
console.log('Pokemon Types with Details', pokemonTypes)

// Now we can build the navigation menu and listings for each type
createNavigation(pokemonTypes)
createListings(pokemonTypes)

