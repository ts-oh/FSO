import React from 'react'
import { useState } from 'react'
import Header from './Header'

const App = () => {
	const anecdotes = [
		'1: If it hurts, do it more often.',
		'2: Adding manpower to a late software project makes it later!',
		'3: The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'4: Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'5: Premature optimization is the root of all evil.',
		'6: Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'7: Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
	]

	const [selected, setSelected] = useState(Math.floor(Math.random() * 7))
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
		const copy = { ...vote }
		copy[selected] += 1
		setVote(copy)
	}

	const handleRandomAnecdotes = () => {
		const totalAnecdotes = anecdotes.length
		let randomNum = Math.floor(Math.random() * totalAnecdotes)
		setSelected(randomNum)
	}

	const getMostVoteCount = () => {
		const voteArray = Object.values(vote)
		const maxVote = Math.max(...voteArray)
		return maxVote
	}

	const getMostVoteAnecdote = () => {
		const mostVote = Object.keys(vote).reduce((a, b) => {
			return vote[a] > vote[b] ? a : b
		})
		return anecdotes[mostVote]
	}

	return (
		<div>
			<Header />
			<p>{anecdotes[selected]}</p>
			<p>count: {vote[selected]}</p>
			<button onClick={() => handleRandomAnecdotes()}>next anecdote</button>
			<button onClick={() => handleVote()}>vote</button>
			<h2>Anecdote with most votes</h2>
			<p>
				{getMostVoteAnecdote()} has {getMostVoteCount()} votes
			</p>
		</div>
	)
}

export default App
