import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countryService from "../../services/country-service";
import "./HomePage.css"
const flagApiUrl = import.meta.env.VITE_REACT_APP_FLAG_API_URL || ''



function HomePage() {

  const [countries, setCountries] = useState(null)

  useEffect(() => {

    async function fetchCountries() {

      const countries = await countryService.countries();
      setCountries(countries)

    }

    fetchCountries()

  }, [])

  const flagLink = (alphaCode) => {
   
    return `${flagApiUrl}/${alphaCode}.png`.toLowerCase()
    
  }

  if(countries === null) {
    return <div>Loading...</div>
  }

  return(
    
    <>
      <h1 className="title" >WikiCountries: Your Guide to the World</h1>
      {countries.map(c => {

        // const imageCode = c.alpha2Code.toLowerCase() ==> lowerCase the alpha2Code, use return key when { }

        return(
        <div key={c._id}>
          <Link to={`/${c.alpha3Code}`}>
            <div className="d-flex justify-content-center align-items-center p-3">
              {/* <div><img src={`https://flagpedia.net/data/flags/icon/72x54/${imageCode}.png`} alt={c.name.common} /></div> 2nd option */}
              <img src={flagLink(c.alpha2Code)} alt={c.name.common} className="me-2"/> {/* 1st option using a function 'flags()' */}
              <span className="name"> {c.name.common} </span>

              {/* <div key={c._id}><Link to={`/${c._id}`}>{c.name.common}</Link></div> ==> sending params to CountryDetails component 
              <div key={c._id}><Link to={`/country?id=${c._id}`}>{c.name.common}</Link></div> ==> sending query's to CountryDetails component */} 

            </div>
          </Link>
        </div>
        
        
      )})}

    </>
  )

}

export default HomePage;
