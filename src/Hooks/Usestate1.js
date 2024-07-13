import React, { useState } from 'react'

function State2() {
  const [car, setCar] =  useState({
    brand: 'hyndai',
    model: 'i20',
    color: "black",
    year: 2022
  })


  const updateColor =()=>{
    setCar(previousState =>{
      return {...previousState, color: "white"}
    });
  }

  
  const updateYear =()=>{
    setCar(previousState =>{
      return {...previousState, year: 2017}
    });
  }





  return (
    <div>

      <h1>I am having the car named: {car.model} which is the brand of {car.brand} with {car.color} color from year of {car.year}</h1>

    <button onClick={updateColor}>Change</button>
    <br />
    <button onClick={updateYear}>year</button>

    </div>
  )
}

export default State2