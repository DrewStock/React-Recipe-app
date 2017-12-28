import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {

    // TO DO: Continue work on search functionality, refer to Udemy course
    props.recipes.map((recipe) => {
        let recipeNameString = JSON.stringify(recipe.name).toLowerCase();
        if (recipeNameString.includes('chicken')) {
            console.log(recipe.name);
        }
    });

    const recipeItems = props.recipes.map((recipe) => {
        return (
            <RecipeListItem 
                onRecipeSelect={props.onRecipeSelect}
                key={recipe._id}
                recipe={recipe} />
        )
    })

    return (
        <ul id="recipe-list" className="col-lg-4">
            {recipeItems}
        </ul>
    );

    
}

export default RecipeList;