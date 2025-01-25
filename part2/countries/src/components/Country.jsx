import Weather from './Weather'

const Country = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>
    <div>capital: {country.capital}</div>
    <div>area: {country.area}</div>
    <h3>languages:</h3>
    <ul>
      {Object.entries(country.languages).map(([code, lang]) => (
        <li key={code}>{lang}</li>
      ))}
    </ul>
    <img 
      src={country.flags.svg}
      alt={`Flag of ${country.name.common}`}
      style={{ width: '200px', height: 'auto' }}
    />
    <Weather name={country.capital[0]} lat={country.capitalInfo.latlng[0]} lon={country.capitalInfo.latlng[1]}/>
  </div>
)
export default Country
