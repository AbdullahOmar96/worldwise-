// import React from 'react'
/* eslint-disable react/prop-types */

import Spinner from "./Spinner"

import CityItem from "./CitiItem"
import Message from "./Message"

export default function CityList({cities,isLoading}) {

  if(!cities.length) return<Message message="Add your first city by clicking on a city on the map "/>
  return (
    <div>
       
       {isLoading ? <ul><Spinner/></ul>
       : <ul>
        {cities.map((city)=>{
          
          return( 
            <CityItem key={city.id} city={city} />
          )
          
          
          })}
       </ul> }
        
       
    </div>
  )
}


