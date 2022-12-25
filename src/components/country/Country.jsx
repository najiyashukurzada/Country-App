import React from 'react'
import millify from 'millify'
import {Link} from "react-router-dom"
import './Country.scss'


function Country({country: {name, population, region, capital, slug, flags }}) {

  return (
    <div>

       <section
     className='Country'
               >
                 <Link to={`/view/${slug}`} > 
                  <div>
                     <img src={flags} alt="" />
                    </div> 
                   <article className='bg'>
                    <h2> {  name.common} </h2>
                    <p> Population:  <strong>  {millify(population)} </strong> </p>

                    <p> Region:  <strong>  {region} </strong> </p>

                    <p> Capital:  <strong>  {capital} </strong> </p>
                    </article> 
                    </Link> 
              
        </section>
    </div>
  )
}

export default Country