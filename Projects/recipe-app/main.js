window.addEventListener('load', async () => {
    // Check if data is available in local storage
    const recipesData = localStorage.getItem('recipes');
    
    if (recipesData) {
        // If data is available, parse and use it directly
        const recipes = JSON.parse(recipesData);
        constructRecipes(recipes);
    } else {
        // If data is not available, fetch from the API
        const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '62000bded8msh797b06efe3466c1p1087d4jsn988a1acf2d8a',
                'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse response as JSON
            console.log(result);
            localStorage.setItem('recipes', JSON.stringify(result)); // Store recipes in local storage
        
            constructRecipes(result); // Pass recipes array to constructRecipes function
        } catch (error) {
            console.error(error);
        }
    }
});

function constructRecipes(recipes) {
    const container = document.getElementById('main-container');

    recipes.forEach(recipe => {
        // Create a new recipe card div
        const card = document.createElement('div');
        card.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'overflow-hidden', 'recipe-card');

        // Create image element
        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.title;
        image.classList.add('w-full', 'h-64', 'object-cover', 'recipe-image');

        // Create title element
        const title = document.createElement('h3');
        title.textContent = recipe.title;
        title.classList.add('font-bold', 'text-xl', 'mb-2', 'recipe-title');

        // Create difficulty level paragraph
        const difficulty = document.createElement('p');
        difficulty.textContent = `Difficulty: ${recipe.difficulty}`;
        difficulty.classList.add('font-semibold', 'text-lg', 'recipe-difficulty');

        // Create view recipe button
        const button = document.createElement('button');
        button.textContent = 'View Recipe';
        button.classList.add('mt-4', 'bg-yellow-500', 'hover:bg-yellow-400', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'recipe-button');

          // Add event listener to button to navigate to recipe.html
          button.addEventListener('click', () => {
            // Use window.location.assign to navigate to recipe.html
            window.location.assign('recipe.html' + '?id=' + recipe.id);
        });
        // Append elements to card
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(difficulty);
        card.appendChild(button);



        // Append card to container
        container.appendChild(card);
    });
}
