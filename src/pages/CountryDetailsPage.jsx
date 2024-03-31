import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import countryService from "../../services/country-service";
import "./HomeDetails.css"

function CountryDetails() {

  /* Working with Params */
  const {alpha3Code} = useParams() /* useParams is an object { key:value }  */
  //console.log("Este es el params",params)

  /* Working with Query's */
  //const location = useLocation() 
  //console.log("this is the location body" ,location) 
  //const query = new URLSearchParams(location.search).get("id") 

  const [country, setCountry] = useState(null);
  console.log("este es el estado: ", country)

  useEffect(() => {
    async function fetchCountry() {

      const country = await countryService.details(alpha3Code)
      // console.log("Dentro del useEffect",country)
      setCountry(country)

    }

      fetchCountry()

  }, [])

  if(country === null ) return <div>Loading...</div>
  

  return(
    <>
      <div className="title">Country Details</div>
      <div>
        <div className="mb-3"><img src={countryService.flagLink(country.alpha2Code)} alt="Country-flag" /></div>
        <div className="mb-4">{country.name.common}</div> {/* Working with params */}
        
        <div className="container ">
          <div className="row">
            <div className="col">
              Capital
            </div>
            <div className="col">
              {country.capital}
            </div>
          </div>
          <div className="row">
            <div className="col">
              Area
            </div>
            <div className="col">
              {country.area}
            </div>
          </div>
          <div className="row">
            <div className="col">
              Borders:
            </div>
            <div className="col">
              
              {country.borders.map(borderName => {
            console.log("Este es el BorderName: " , borderName)
            return (

                <div key={borderName}>{borderName}</div>

              )}
              )}
            </div>
          </div>
        </div>

      </div>
      
      {/*<div>Country Id : {query}</div>  working with query's */}
      <div>
        <Link to={`/`}>Home</Link>
      </div>
    </>
  )

}

export default CountryDetails;
