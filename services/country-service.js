const baseApiUrl = import.meta.env.VITE_REACT_APP_BASE_API_URL || ""
const flagApiUrl = import.meta.env.VITE_REACT_APP_FLAG_API_URL || "" 

const countries = async () => {

  const response = await fetch(`${baseApiUrl}`);
  const countries = await response.json()

  return countries;

}


const details = async (alpha3Code) => {

  const response = await fetch(`${baseApiUrl}/${alpha3Code}`);
  const country = await response.json();
  //console.log("este es el pais dentro del service: ", country)

  return country;

}

const flagLink = (alphaCode) => {
   
  return `${flagApiUrl}/${alphaCode}.png`.toLowerCase()
  
}

export default {

  countries,
  details,
  flagLink,

}