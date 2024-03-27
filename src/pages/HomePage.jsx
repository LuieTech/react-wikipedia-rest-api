import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countryService from "../../services/country-service";


function HomePage() {

  const [countries, setCountries] = useState(null)

  useEffect(() => {

    async function fetchCountries() {

      const countries = await countryService.countries();
      setCountries(countries)

    }

    fetchCountries()

  }, [])

  if(countries === null) {
    return <div>Loading...</div>
  }

  return(
    
    <div>
      {countries.map(c => (
        
        // <div key={c._id}><Link to={`/${c.}`}>{c.name.common}</Link></div>
        // <div key={c._id}><Link to={`/country?id=${c._id}`}>{c.name.common}</Link></div>
        <div key={c._id}><Link to={`/${c.alpha3Code}`}>{c.name.common}</Link></div>
        
      ))}
    </div>
  )

}

export default HomePage;
