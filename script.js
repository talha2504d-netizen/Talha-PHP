document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dietForm');
    const formContainer = document.querySelector('.form-container');
    const resultsContainer = document.getElementById('results');
    const resetBtn = document.getElementById('resetBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Gather values
        const age = parseFloat(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const activity = parseFloat(document.getElementById('activity').value);
        
        const goalEl = document.querySelector('input[name="goal"]:checked');
        const goal = goalEl ? goalEl.value : 'maintain';

        // Calculate BMR (Mifflin-St Jeor)
        let bmr = (10 * weight) + (6.25 * height) - (5 * age);
        bmr += (gender === 'male') ? 5 : -161;

        // Calculate TDEE
        let tdee = bmr * activity;

        // Adjust for Goal
        if (goal === 'lose') tdee -= 500;
        if (goal === 'gain') tdee += 500;
        
        tdee = Math.round(tdee);

        // Calculate Macros
        // Protein: ~2.2g per kg of bodyweight
        let protein = Math.round(2.2 * weight);
        if (goal === 'lose') protein = Math.round(2.4 * weight); // Higher protein on cut

        // Fat: ~0.8g per kg of bodyweight
        let fat = Math.round(0.8 * weight);
        if (goal === 'gain') fat = Math.round(1.0 * weight);

        // Carbs: The rest of the calories (Protein & Carbs = 4 cal/g, Fat = 9 cal/g)
        let proteinCals = protein * 4;
        let fatCals = fat * 9;
        let remainingCals = tdee - (proteinCals + fatCals);
        let carbs = Math.round(remainingCals / 4);

        if (carbs < 0) carbs = 0; // Fallback

        // Update UI
        document.getElementById('valCals').innerHTML = `${tdee} <span class="unit">kcal</span>`;
        document.getElementById('valPro').innerHTML = `${protein} <span class="unit">g</span>`;
        document.getElementById('valFat').innerHTML = `${fat} <span class="unit">g</span>`;
        document.getElementById('valCarb').innerHTML = `${carbs} <span class="unit">g</span>`;

        generateMealPlan(goal, tdee);

        // Swapping views
        formContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        setTimeout(() => {
            resultsContainer.classList.add('results-show');
        }, 50);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    resetBtn.addEventListener('click', () => {
        resultsContainer.classList.remove('results-show');
        setTimeout(() => {
            resultsContainer.classList.add('hidden');
            formContainer.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    });

    function generateMealPlan(goal, cals) {
        const mealList = document.getElementById('mealList');
        mealList.innerHTML = ''; // clear 

        let mealPlan = [];

        if (goal === 'lose') {
            mealPlan = [
                { time: 'Breakfast', title: 'Protein Oatmeal & Eggs', desc: '40g oats cooked with almond milk + 3 scrambled egg whites + 1 whole egg.' },
                { time: 'Lunch', title: 'Grilled Chicken Salad', desc: '150g chicken breast, mixed greens, cucumber, tomatoes, 1 tbsp olive oil.' },
                { time: 'Snack', title: 'Greek Yogurt & Berries', desc: '150g low-fat greek yogurt with a handful of blueberries.' },
                { time: 'Dinner', title: 'White Fish & Greens', desc: '200g white fish (cod/tilapia), 1 cup steamed broccoli, small portion quinoa.' }
            ];
        } else if (goal === 'gain') {
            mealPlan = [
                { time: 'Breakfast', title: 'Power Bowl', desc: '80g oats, 1 scoop whey protein, 1 banana, 2 tbsp peanut butter & whole milk.' },
                { time: 'Morning Snack', title: 'Fruit & Nuts', desc: 'Apple and 30g almonds or walnuts.' },
                { time: 'Lunch', title: 'Beef & Rice', desc: '200g lean ground beef, 1.5 cups jasmine rice, mixed veggies.' },
                { time: 'Pre-Workout', title: 'Rice Cakes & Honey', desc: '3 rice cakes topped with honey or jam.' },
                { time: 'Dinner', title: 'Salmon Pasta', desc: '150g salmon fillet, whole wheat pasta with tomato sauce.' }
            ];
        } else {
            // Maintain
            mealPlan = [
                { time: 'Breakfast', title: 'Avocado Toast & Eggs', desc: '2 slices whole grain toast, 1/2 avocado, 2 poached eggs.' },
                { time: 'Lunch', title: 'Turkey Wrap', desc: 'Whole wheat wrap, 150g turkey breast, spinach, hummus.' },
                { time: 'Snack', title: 'Protein Shake', desc: '1 scoop whey protein mixed with water or almond milk.' },
                { time: 'Dinner', title: 'Chicken & Sweet Potato', desc: '150g grilled chicken, 1 medium baked sweet potato, asparagus.' }
            ];
        }

        mealPlan.forEach(meal => {
            const el = document.createElement('div');
            el.className = 'meal-item';
            el.innerHTML = `
                <div class="meal-time">${meal.time}</div>
                <div class="meal-details">
                    <h4>${meal.title}</h4>
                    <p>${meal.desc}</p>
                </div>
            `;
            mealList.appendChild(el);
        });
    }
});
