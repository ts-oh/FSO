import { useState } from 'react'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPeople from './components/ListPeople'
import axios from 'axios'

const App = () => {
 
  const [persons, setPersons] = useState([])
  const [newPhone, setNewPhone] = useState('')
  const [newName, setNewName] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(
      response => {
        setPersons(response.data)
      }
    )
  },[])

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
