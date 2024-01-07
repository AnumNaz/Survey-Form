import React from 'react'

 function greet(props) {
  return (
    <div className='container card p-3 mt-2 register-control form-group'>
          <h6>Hy! {props.name}</h6>
          <h3>Congratulation!</h3>
      <h6>Your Survey form Sbmitted</h6>
      {/* <h2>Thanks for registration</h2> */}
    
      {/* <h6>Verification send to {props.email}</h6> */}
    </div>
  )
}

export default greet;