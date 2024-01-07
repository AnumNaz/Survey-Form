import React from 'react'

export default function detail(props) {
  return (
    
      <div className='container card p-3 mt-2 register-control'>
      <form onSubmit={props.submit}>
        
        <div className='form-group'>
        <label htmlFor='name' >
            Name: 
        </label>
        <input type='text' name='name' className='form-control' required/>
        </div>
        <div className='form-group'>
        <label htmlFor='email' >
            Email: 
        </label>
        <input type='email' name='email' className='form-control ' required/>
        </div>
        
        <button type='submit' className='btn btn1 btn-primary m-1 '>Register</button>
        {/* <button type='button' style={btnStyle} onClick={props.click} className={btnClasses.join(" ")}>{btnText}</button> */}
       
      </form>
      <center>
      <span class="badge rounded-pill bg-primary">1</span>
      <span class="badge rounded-pill bg-light text-dark m-2">2</span>
    
        </center>
    </div>
    
  )
}
