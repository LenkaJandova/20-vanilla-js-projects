const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const singleMealEl = document.getElementById('single-meal');
const resultHeading = document.getElementById('result-heading');

// Search meal
function searchMeal(e) {
    e.preventDefault();

    // Clear single meal
    singleMealEl.innerHTML = '';

    // Get search term
    const term = search.value;
    
    // Check for empty
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
            
            if(data.meals === null) {
                resultHeading.innerHTML = `<p>There are no results for '${term}'. Try again.</p>`;
            }else {
                mealsEl.innerHTML = data.meals.map(meal =>`
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                    <div class="meal-info" data-mealID= ${meal.idMeal} >
                    
                    </div>
                </div>
                `)
            }
        })
    } else {
        alert('Please enter a search term');
    }
}


// Event listeners

submit.addEventListener('submit', searchMeal);
