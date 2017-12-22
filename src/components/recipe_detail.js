import React from 'react';

const RecipeDetail = ({recipe, selectedRecipe}) => {

    if (!recipe) {
        return <div>Loading...</div>
    }

    return (
        <div id="recipe-detail" className="h-75 col-lg-8 card">
        <div>
            <h2>{recipe.name}</h2>
        </div>
        <div className="detail-image">
            <img src={recipe.imageUrl} />
            <p>Bacon ipsum dolor amet biltong frankfurter shank swine pancetta prosciutto short ribs sausage pig chicken. Ball tip rump tongue spare ribs burgdoggen, cupim buffalo chuck corned beef flank. Sirloin fatback buffalo tenderloin, pancetta shankle landjaeger ground round sausage hamburger pork loin bacon tongue. Bresaola ham hock kielbasa sausage strip steak shank cupim andouille leberkas turducken. Ball tip turkey ribeye chuck pork loin tenderloin spare ribs.
            </p>
        </div>
    </div>
    );
}

export default RecipeDetail;