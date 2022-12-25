import React  from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import millify from 'millify'
import './Detalis.scss'
import { useCountryFetch } from '../../../components/hooks/Countryfetch';


function Details({currencies, languages}) {

  const {countryCodes} = useParams()
  const { dataNew, setDataNew, countries } = useCountryFetch()

let money = []
let language = []

countries.forEach((item) => {


  if(item.slug === countryCodes){

    currencies = item.currencies
    Object.keys(currencies).forEach((its) => {
    money.push(currencies[its]) 
    })


    languages = item.languages
    Object.keys(languages).forEach((is) => {
      language.push(languages[is])
    })

  }

  

})
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }


const handleChange = (selected) => {
  
const filtered = countries.filter((it) => it.slug.toLowerCase() === selected.toLowerCase()
)
setDataNew(filtered[0])

if (filtered[0]){
  navigate(`/view/${selected}`)
}

console.log(filtered)

}

  return (
    <main className='container'> 
      
      <section data-aos="fade-right" className='back' onClick={goBack}> Go back  </section>
    
      <section className='country' > 

      <article data-aos="zoom-out" data-aos-duration="6000" className='flag'>
        <img src={dataNew.flags} alt="" />

       </article>

<article >
       <h3 data-aos="fade-right"> {dataNew.name.common}  </h3>
      
        <p data-aos="fade-right">  Official Name: <strong>  {dataNew.name.official} </strong></p>

     <div data-aos="fade-right"> Currency: {money.map((i, idx) => (
      <p  key={idx}>
       <strong>{i.name} </strong> <strong >{i.symbol} </strong>
       </p>
     ))} </div>

<p data-aos="fade-right"> Language: {!language ? " No language" : language.map((item, idx )=> (
 <strong key={idx}> { item + "."} </strong>
))} </p> 


<p data-aos="fade-right"> Population: <strong> {millify(dataNew.population) } </strong> </p>
<p data-aos="fade-right"> Region: <strong> {dataNew.region } </strong> </p>
<p data-aos="fade-right"> Sub Region: <strong> {dataNew.subregion } </strong> </p>
<p data-aos="fade-right"> Capital: <strong> {dataNew.capital } </strong> </p>
<p data-aos="fade-right"> Time Zones: <strong> {dataNew.timezones } </strong> </p>
<p data-aos="fade-right"> Car Side: <strong> {dataNew.car.side} </strong> </p>

<div data-aos="zoom-out" data-aos-duration="3000"  className='borderCon'><p> Borders:</p> <strong className='borders' > {!dataNew.borders ? "No borders" :  dataNew.borders.map((item, idx) => ( <div  key={idx} onClick={() => handleChange(item)}  className='border'> {item}  </div> ))} </strong>  </div> 


</article>
    </section>
    
    </main>
  )
}

export default Details