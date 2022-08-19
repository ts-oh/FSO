import React from 'react'
import { useState } from 'react'
import Header from './Header'

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
	]

	const [selected, setSelected] = useState(0)
	const [vote, setVote] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	})

	const handleVote = () => {
		setVote((prevState) => {
			return {
				...prevState,
				selected: (vote[selected] += 1),
			}
		})
	}

	const handleRandomAnecdotes = () => {
		let randomNum = Math.floor(Math.random() * anecdotes.length)
		setSelected((prevState) => {
			return (prevState = randomNum)
		})
	}

	const mostVote = Object.entries(vote).sort(
		(x, y) => y[selected] - x[selected]
	)[0]

	console.log(mostVote)

	return (
		<div>
			<Header />
			<p>{anecdotes[selected]}</p>
			<p>{vote[selected]}</p>
			<button onClick={() => handleRandomAnecdotes()}>next anecdote</button>
			<button onClick={() => handleVote()}>vote</button>
			<h2>Anecdote with most votes</h2>
			<p>{anecdotes[mostVote[0]]}</p>
		</div>
	)
}

export default App
