import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='flex item-center justify-around bg-white p-5 '>
        <h1 className='text-black font-bold'>Dashboard</h1>
        <div className='flex gap-3'>
          <Image src="/images/help.png" alt="" width={20} height={10}/>
          <Image src="/images/notification.png" alt="" width={20} height={10}/>
          <Image src="/images/profile.png" alt="" width={20} height={10}/>
        </div>  
      </div>
      <div>
        <div className='flex'>
          <Image src="/images/wallet.png" alt="" width={20} height={10}/>
          <p>View  Balance Due</p>
        </div>
        <p>
          This is a monthly payment for app usage.Your
          subscription gives you optimum benefit and
          flexibility.
        </p>
      </div>
    </div>
  )
}

export default page