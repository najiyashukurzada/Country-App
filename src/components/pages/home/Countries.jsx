import React, {useRef} from 'react'
import { useHomeFetch} from '../../../components/hooks/Countriesfetch'
import { BsSearch } from 'react-icons/bs'
import './Countries.scss'
import Country from '../../country/Country'



function Countries() {
  

    const {countries, countriesMain, setCountries} = useHomeFetch()
    const regionRef = useRef()
    const noCountry = countries.status || countries.message
    const searchIt = (e) => {
    const value = e.target.value;
    const filterCountry =  countriesMain.filter((item) => {

  return (item.capital.toLowerCase().includes(value.toLowerCase()) || 
  item.name.common.toLowerCase().includes(value.toLowerCase())
 
 )
})
setCountries(filterCountry)

  }
  const handleSelect = (e) => {
    e.preventDefault();

    const selectValue = e.target.value
    const selectRegion = countriesMain.filter((item) => {
      if(selectValue === "All"){
        return item
      } else {

        return item.region === selectValue
      }
    })

    setCountries(selectRegion)
  }


  return (
    <main className='container'>
      <div className='Header '> 
        <aside className='Input'> 
          <BsSearch/>  
            <input 
              name="search-form"
              id="search-form" 
              type="search" 
              placeholder='search for country'
              onChange={ searchIt} /> 
            </aside> 
            <aside className='Select' style={{backgroundColor: "white"}} >
               <select 
               ref={regionRef}
               className='txt' 
               onChange={handleSelect}

             > 
              <option  value="All"> Filter by Region </option>
              <option value="Africa"> Africa </option>
              <option value="Americas"> Americas </option>
              <option value="Antarctic"> Antarctic </option>
              <option value="Asia"> Asia </option>
              <option value="Europe"> Europe </option>
              <option value="Oceania"> Oceania </option>
          </select> 
        </aside> 
      </div>
      <section className='MapCont'>
        {
          !noCountry ? (countries.map((country, index) => (
            <section key={index} className='MapItems'>
              <Country   country={country} />
            </section>
                
            ))) : <p> No country found .... </p>
        } 
      </section>
    </main>
  )}

export default Countries