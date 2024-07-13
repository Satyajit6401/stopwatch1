import React from 'react'

function Logical(props) {
    const cars = props.other;
    

  return (
    <div>
        <h1> Hi i am a garage !</h1>

        {cars.length > 0
        &&
        <h1>my car array length is {cars.length}</h1>
        }
    </div>
  )
}

export default Logical