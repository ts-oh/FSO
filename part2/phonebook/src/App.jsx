import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const initialPerson = [
    { name: 'Arto Hellas', number: '040-123456', id: nanoid() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: nanoid() },
    { name: 'Dan Abramov', number: '12-43-234345', id: nanoid() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: nanoid() },
  ]

  const [persons, setPersons] = useState(initialPerson)
  // newPhone is for controlling the form input element
  const [newPhone, setNewPhone] = useState('')
  // newName is for controlling the form input element
  const [newName, setNewName] = useState('')
  const [search, setSearch] = useState("");

  const addName = (e) => {
    e.preventDefault()
    const personExist = persons.some((person) => person.name === newName)
    if (!personExist) {
      const newPersonObj = {
        id: nanoid(),
        name: newName,
        number: newPhone,
      }
      setPersons(persons.concat(newPersonObj))
    } else {
      return alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewPhone('')
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPhone = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearchName = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const listPeople = () => {
    return (persons.filter(person => (person.name.toLowerCase().includes(search.toLowerCase())))
      .map((person) => (
        <p key={person.id}>
          {person.name}: {person.number}
        </p>
      )))
  }

  return (
    <main>
      <h2>Phonebook</h2>
      <div>
        filter showin with{' '}
        <input type='search' value={search} onChange={handleSearchName} />
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handleNewPhone} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
        {newName}
      </form>
      <hr />
      <h2>Numbers</h2>
      <ul className='item-list'>{listPeople()}</ul>
    </main>
  )
}

export default App
