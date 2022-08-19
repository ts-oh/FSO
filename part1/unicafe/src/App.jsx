import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

function App() {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGood = () => {
		setGood((prevState) => {
			return prevState + 1
		})
	}

	const handleNeutral = () => {
		setNeutral((prevState) => {
			return prevState + 1
		})
	}

	const handleBad = () => {
		setBad((prevState) => {
			return prevState + 1
		})
	}

	return (
		<>
			<Header />
			<Button
				handleGood={handleGood}
				handleNeutral={handleNeutral}
				handleBad={handleBad}
			/>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	)
}

export default App
