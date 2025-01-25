import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    phonebookService.getAll()
    .then(allPersons => {
      setPersons(allPersons)
    })
  }, [])

  const clearInputs = () => {
    setNewName('')
    setNewNumber('')
    setNameFilter('')
  }
  const addPersonsToList = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    phonebookService.create(newPerson)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      clearInputs()
      showNotification(`Added ${returnedPerson.name}`)
    })
  }
  const updatePersonsInList = (existingPerson) => {
    const changedPerson = {...existingPerson, number: newNumber}
    phonebookService.update(existingPerson.id, changedPerson)
    .then(returnedPerson => {
      setPersons(persons.map(p => p.id === existingPerson.id ? returnedPerson : p))
      clearInputs()
      showNotification(`Updated number for ${returnedPerson.name}`)
    })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the older number with a new one?`)){
        updatePersonsInList(existingPerson)
      }
    } else {
      addPersonsToList()
    }
  }

  const personsToShow = nameFilter.length == 0
    ? persons
    : persons.filter(person => person.name.includes(nameFilter))

  const showNotification = message => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter value={nameFilter} onChange={setNameFilter} />

      <h2>Add new</h2>
      <PersonForm onSubmit={addPerson}
        name={newName} onNameChange={setNewName}
        number={newNumber} onNumberChange={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons
        persons={personsToShow}
        setPersons={setPersons}
        showNotification={showNotification}
      />
    </div>
  )
}

export default App
