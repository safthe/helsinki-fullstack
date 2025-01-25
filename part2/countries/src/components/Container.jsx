import Countries from './Countries'
import Country from './Country'

const Container = ({ countries, setFilteredCountries }) => {
  if (countries && countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries && countries.length > 1) {
    return <Countries countries={countries} setFilteredCountries={setFilteredCountries}/>
  }

  if (countries && countries.length === 1) {
    return <Country country={countries[0]} />
  }
}
export default Container
