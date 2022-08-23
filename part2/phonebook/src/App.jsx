import { useState } from 'react'
import { nanoid } from 'nanoid'


const App = () => {

  const initialName = [{ key: nanoid(), name: 'Arto Hellas' }]

  const [persons, setPersons] = useState(initialName)

  //newName is for controlling the form input element
  const [newName, setNewName] = useState('')

  const addName = (e) => {
    e.preventDefault()

    const personExist = persons.some(person => (person.name === newName))
    console.log("person exist ?", personExist)

    if (!personExist) {
      const newPersonObj = {
        key: nanoid(),
        name: newName
      }
      setPersons(persons.concat(newPersonObj))
    } else {
      return alert(`${newName} already exists!`)
    }

    setNewName('')
  }


  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        {newName}
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (<li key={person.key}>{person.name}</li>))}
      </ul>
    </div>
  )
}

export default App
