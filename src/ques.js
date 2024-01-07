import React from 'react'

export default function ques(props) {
  return (
   
      
    
     <div className='container card p-3 mt-2 register-control'>
    <form onSubmit={props.submit}>
                            <div className='form-group'>
                                <label htmlFor=''>
                                    3: What are you doing?
                                </label>
                                <br/>
                                <input type='radio' value="teacher" id='teacher' name='q1' autoComplete='off'></input>
                                <label htmlFor='teacher'>Teaching</label> <br/>
                                <input type='radio' value="student" id='student' name='q1' autoComplete='off'></input>
                                <label htmlFor='student'>Student</label><br/>
                                <input type='radio' value="programmer" id='programmer' name='q1' autoComplete='off'></input>
                                <label htmlFor='programmer'>programmer</label><br/>
                                <br />
                                <input type='text' className='form-control' name='other' autoComplete='off' placeholder='Type here if not listed'></input>

                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>4: Please Rate Our Course</label>
                                <br/>
                                <input type='radio' value="good" id='good' name='q2' autoComplete='off'></input>
                                <label htmlFor='good'>Good</label><br/>
                                <input type='radio' value="execllent" id='excellent' name='q2' autoComplete='off'></input>
                                <label htmlFor='excellent'>Excellent</label><br/>
                                <input type='radio' value="poor" id='poor' name='q2' autoComplete='off'></input>
                                <label htmlFor='poor'>Poor</label><br/>
                                
                                
                            </div>
                            <br/>
                            <div className='form-group'>
                            <label htmlFor=''>
                                    5: Write Your Review Here!
                                </label>
                                
                                <textarea className='form-control' name='q3'></textarea>
                            </div>
                            <button type='submit' className='btn btn1 btn-primary m-1 '>Save</button>
                        </form>
     <center>
     <span class="badge rounded-pill bg-light text-dark m-2">1</span>
     <span class="badge rounded-pill bg-primary">2</span>
       </center>
   </div>
  )
}
