import React, {useState} from 'react'

function State1() {

  const [name, setName] = useState("");
  const [clg, setClg] = useState("trident");
  const[address, setAddress] = useState("bbsr");
  const[branch, setBranch] = useState("IT");
  
  return (
    <div className='text-2xl text-center font-mono '>

    <h1 className='py-3'>We are having interns named: {name} and collge from {clg} and the address is {address} from branch {branch}.</h1>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Anindita")}>Intern1</button>
    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setClg("USBM")}>clg1</button>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Lipa")}>Intern2</button> 

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Biswajit")}>Intern3</button>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Ayushi")}>Intern4</button>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Satyajit")}>Intern5</button>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Sipra")}>Intern6</button>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Sambit")}>Intern7</button>

    <button className='bg-slate-400 text-black rounded p-3 mx-3' onClick={()=> setName("Anish")}>Intern8</button>
    </div>
  )
}

export default State1;

//HOOKS RULES

//rule1: hooks can not be write in a top level
//rule2: hooks can not be wriiten outside the function
//rule3: Hooks cannot be conditional