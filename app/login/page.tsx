import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const login = () => {
  return (
    <div className='bg-amber-100 min-h-screen w-full'>
      <div className=' flex flex-col items-center pt-20'>
         <Image src="/images/home.png" alt="Login" width={200} height={200} />
      </div>
      <h1 className='text-black text-3xl font-bold pt-10 pl-10'>Welcome back!</h1>
      <p className='text-gray-600 font-bold pl-10 pt-2'>Please enter your details</p>
      <div className=''>
        <button className='flex items-center justify-center gap-3 border-2 border-gray-500 text-1xl bg-white text-black w-60 h-12 rounded-xl ml-20 mt-5'>
          <Image src="/images/google.png" alt="Google" width={20} height={10} />
          <p className='text-black font-bold'>continue with google</p>
        </button>
      </div>
      <div className='flex items-center justify-center gap-5 pt-5'>
        <Image src="/images/Line.png" alt="" width={90} height={10}/>
        <p className='text-black font-bold text-center'>or</p>
        <Image src="/images/Line.png" alt="" width={90} height={10}/>
      </div>
      <form action="" className='flex flex-col gap-5 pt-10 justify-center items-center position-absolute'>
        <label>
          <p className='text-black'>email</p>
          <input type="text" className='border-2 border-gray-500 w-80 h-12 rounded-xl text-black pl-10'  />
        </label>
        <label>
          <p className='text-black'>password</p>
          <input type="Password" placeholder="" className='border-2 border-gray-500 w-80 h-12 rounded-xl text-black pl-10' />
        </label>
      </form>
      <p className='pl-15 pt-3 text-black font-bold'>Forgot password?</p>
      <div className='flex item-center justify-center'>
         <Link href="/" className='flex items-center justify-center border-none text-1xl bg-amber-800 text-white w-80 h-12 rounded-xl mt-5'>Login</Link>
      </div>
      <div className='flex pl-10 pt-4 pb-20' >
        <p className='text-black font-bold'>Don't have an account?</p>
        <p className='text-amber-800'>sign up</p>
      </div>
    </div>
  )
}

export default login