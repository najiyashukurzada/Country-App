import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"


export const useCountryFetch = () => {
  
  
  const [countries, setCountries] = useState([])
  const [dataNew, setDataNew] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  const {countryCodes} = useParams();



  useEffect(() => {


  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data =  await response.json()
    
    let result = []
 for (let i = 0; i < data.length; i++) {
  const country = data[i];
  
    const dataToFetch = {
      languages: country.languages,
      currencies: country.currencies,
      flags: country.flags.svg,
       name: country.name,
        population: country.population,
         region: country.region,
          subregion: country.subregion, 
          capital: country.capital && country.capital.length > 0 ? country.capital[0] : "",  
          borders: country.borders,
          
        } 

       result.push(dataToFetch)
      //  console.log(dataToFetch.name)
        
        setCountries(result)
      }

  const filterById = result.filter((item) =>

item.slug.toLowerCase() === countryCodes.toLowerCase()
)
  

    setDataNew(filterById[0])
    setIsLoaded(true)
    
  }

    try {
  fetchData()
  
} 
catch(error){
setError(true)
}  



  }, [countryCodes])
  return { countries, dataNew, isLoaded, error, setCountries, setDataNew}
}