import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const main = () => {
  return (
    <div className='flex flex-col p-6 pb-20'>
        <p className='text-black font-bold text-1xl inline-block border-b-2 pb-5 border-amber-800'>Everything at your fingertips</p>
        <h1 className='text-amber-800 text-4xl py-10 font-bold'>living with ease at the touch of button...</h1>
        <Image src={'/images/girl.png'} alt="" width={400} height={400} className='w-full h-auto p-3' />
        <p className='text-black font-bold pt-10'>EstateEase gives you a feel of heaven</p>
        <div className='flex pt-10 gap-5'>
          <Link href= "/login" className='flex items-center justify-center border-amber-600 border-2 text-1xl bg-white text-black w-35 h-12 rounded-xl'>Login</Link>
          <Link href= "/signup" className='flex items-center justify-center border-none text-1xl bg-amber-800 text-white w-35 h-12 rounded-xl'>Create Account</Link>
      </div>
            
    </div>
  )
}

export default main