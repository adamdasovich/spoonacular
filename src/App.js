import React, { useState } from 'react'
import MealList from './MealList'

const App = () => {
	const [mealData, setMealData] = useState(null)
	const [calories, setCalories] = useState(2000)

	const handleChange = (e) => {
		setCalories(e.target.value)
	}

	const getMealData = async () => {
		const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=30260263cf364e199fe6f749f894680d&timeFrame=day&targetCalories=${calories}`)
		const data = await response.json()
		setMealData(data)
		console.log(data)
	}

	return (
		<div className='App'>
			<section className='controls'>
				<input
					type='number'
					placeholder='Calories'
					value={calories}
					onChange={handleChange}
				/>
			</section>
			<button onClick={getMealData}>Get Daily Meal Plan</button>
			{mealData && <MealList mealData={mealData} />}
		</div>
	)
}

export default App