const Countries = ({ countries, setFilteredCountries }) => (
  <div>
    {countries.map(country =>
      <div key={country.ccn3}>
        {country.name.common}{' '}
        <button onClick={() => setFilteredCountries([country])}>show</button>
      </div>
    )}
  </div>
)
export default Countries
