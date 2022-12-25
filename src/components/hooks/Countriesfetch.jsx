import {useState, useEffect} from "react"

export const Container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      stagerChildren: 0.2,
    }
  }
}

export const useHomeFetch = () => {

  const [countries, setCountries] = useState([])
  const [countriesMain, setCountriesMain] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
  fetchData()
  
} 
catch(error){
setError(true)
}  
   
  }, [])

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data =  await response.json()
 let result = []

 for (let i = 0; i < data.length; i++) {
  const country = data[i];
  

    const dataToFetch = {
      flags: country.flags.svg,
       name: country.name,
        population: country.population,
         region: country.region,
          capital: country.capital && country.capital.length > 0 ? country.capital[0] : "",  
         
    } 
  result.push(dataToFetch)
}

    setCountries(result)
    setCountriesMain(result)
    setIsLoaded(true)
}
  return { countries,  countriesMain, isLoaded, error, setCountries, fetchData}
}