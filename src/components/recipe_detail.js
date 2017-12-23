import React from 'react';

const RecipeDetail = ({recipe, selectedRecipe}) => {

    if (!recipe) {
        return <div className="loader">Loading...</div>
    }

    const recipeIngredients = recipe.ingredients.map((ingredient) => {
        return (
            <li key={ingredient.ingredientId}>{ingredient.ingredientDescription}</li>
        )
    });

    return (
        <div id="recipe-detail" className="h-75 col-lg-8 card">
            <div>
                <h2>{recipe.name}</h2>
            </div>
            <div className="detail-image">
                <img src={recipe.imageUrl} />
                <ul> 
                    {recipeIngredients} 
                </ul>
                <p>
                    {recipe.instructions}
                </p>          
            </div>
        </div>
    );
}

export default RecipeDetail;