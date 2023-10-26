import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/authSlice';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


export const SignUpPage = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const user = useSelector((state) => state.auth.user)
const error = useSelector((state) => state.auth.error)
const dispatch = useDispatch()

const submitHandler = e => {
  e.preventDefault()
  dispatch(signup({username, password}))
  .then(() => {
    setUsername('')
    setPassword('')
  })
}

  return(
    <div>
      <form className='mx-auto border-2 p-9 md:p-12 w-72 md:w-96 mt-36 h-84 bg-black' onSubmit={submitHandler}>
        <h3 className='pb-6 text-2xl text-center text-white'>SignUp</h3>
        <label className='block mb-1 text-xl text-cyan-400' htmlFor='username'>Username</label>
        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label className='block mb-1 text-xl text-cyan-400' htmlFor='password'>Password</label>
        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <div className='flex justify-between'>
          <button className='px-3 py-1 rounded-sm bg-cyan-400' type='button'>Cancel</button>
          <button className='px-3 py-1 rounded-sm bg-cyan-400' type='submit'>Submit</button>
        </div>
        {error ? <p className='pt-10 text-center text-red-600'>{error}</p>: null}
        {user ? <Navigate to='/profile' replace={true}/> : null}
      </form>
    </div>
)};

export default SignUpPage;
