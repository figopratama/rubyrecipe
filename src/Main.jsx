import React from "react"
import IngredientsList from "./components/IngredientsList"
import RubyRecipe from "./components/RubyRecipe"
import { getRecipeFromLlama } from "./ai"



export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromLlama(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]) 
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. rice, scrambled egg, or soy sauce"
                    name="ingredient"

                />
                <button>Add Ingredient</button>
            </form>
            
            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}

            {recipe && <RubyRecipe recipe={recipe} />}
        </main>
    )
}