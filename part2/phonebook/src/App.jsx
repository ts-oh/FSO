import { useState } from 'react'
import { nanoid } from 'nanoid'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPeople from './components/ListPeople'

const App = () => {
  const initialPerson = [
    { name: 'Arto Hellas', number: '040-123456', id: nanoid() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: nanoid() },
    { name: 'Dan Abramov', number: '12-43-234345', id: nanoid() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: nanoid() },
  ]

  const [persons, setPersons] = useState(initialPerson)
  const [newPhone, setNewPhone] = useState('')
  const [newName, setNewName] = useState('')
  const [search, setSearch] = useState('')

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

  const listPersons = () => {
    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((person) => (
        <p key={person.id}>
          {person.name}: {person.number}
        </p>
      ))
  }

  return (
    <main>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <PersonForm newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} addName={addName} />
      <h3>Numbers</h3>
      <ListPeople listPersons={listPersons} />
    </main>
  )
}

export default App
