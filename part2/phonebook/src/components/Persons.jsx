import phonebookService from '../services/phonebook'

const Persons = ({ persons, setPersons, showNotification }) => {
  const deletePerson = person => {
    if (window.confirm(`Delete ${person.name}`)) {
      phonebookService.remove(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
      .catch(error => {
        setPersons(persons.filter(p => p.id !== person.id))
        showNotification(`Information of ${person.name} has already been removed from the server`)
      })
    }
  }

  return (
    <div>
      {persons.map(
        person => <div key={person.id}>
          {person.name} {person.number}
          &nbsp;
          <button onClick={() =>deletePerson(person)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons
