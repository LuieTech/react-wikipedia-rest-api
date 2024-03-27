import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import countryService from "../../services/country-service";

function CountryDetails() {

  /* Working with Params */
  const params = useParams() 
  console.log("Este es el params",params)

  /* Working with Query's */
  //const location = useLocation() 
  //console.log("this is the location body" ,location) 
  //const query = new URLSearchParams(location.search).get("id") 

  const [country, setCountry] = useState(null);
  console.log("Este es el estado: ", country)

  useEffect(() => {
    async function fetchCountry() {

      const country = await countryService.details(params.alpha3Code)
      console.log("Dentro del useEffect",country)
      setCountry(country)

    }

      fetchCountry()

  }, [])

  if(country === null ) return <div>Loading...</div>
  

  return(
    <>
      <div>Country name : {country.name.common}</div> {/* Working with params */}

      {/*<div>Country Id : {query}</div>  working with query's */}

      <Link to={`/`}>Home</Link>
    </>
  )

}

export default CountryDetails;
