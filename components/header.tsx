import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div className='flex items-center justify-center gap-20 pt-20'>
        <h1 className='text-2xl font-bold text-amber-800'>EstateEase</h1>
        <Link href="/signup" className='flex items-center justify-center border-1 text-1xl bg-amber-800 text-white w-35 h-12 rounded-xl'>Create Account</Link>
    </div>
  )
}

export default header