import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from "./components/Filter"
import Container from "./components/Container"

const App = () => {
  const [filter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    countriesService.getAll().then(countriesResponse => {
      setAllCountries(countriesResponse)
    })
  }, [])

  const handleFilterChange = (event) => {
    const newValue = event.target.value
    if (newValue !== '') {
      const countries = allCountries.filter(c => c.name.common.toLowerCase().includes(newValue.toLowerCase()))
      setFilteredCountries(countries)
    } else {
      setFilteredCountries(null)
    }
    setFilter(newValue)
  }

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange} />
      <Container countries={filteredCountries} setFilteredCountries={setFilteredCountries} />
    </div>
  )
}

export default App
