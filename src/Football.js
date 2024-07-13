import React from 'react'

function Football() {
    const shoot = (a) =>{
        alert(a);
    }
  return (
    <div className='text-center text-8xl bg-slate-400'>
        <button onClick={()=> shoot("we are learning React js")}>Change</button>
    </div>
  );
}

export default Football;