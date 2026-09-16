"use client";
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import {getRedirectResult, signInWithRedirect} from 'firebase/auth'
import {auth, gooleProvider} from '../../lib/firebase'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const signup = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    
    let mounted = true;

    async function handleRedirectResult() {
      try {
        const result = await getRedirectResult(auth);
        if (mounted) return;
        if (result?.user) {
          router.replace('/dashboard');
        }

      } catch (err: unknown) {
        if(!mounted) return;

        const message = err instanceof Error ? err.message : "google sign in failed"
        setError(message)
        setLoading(false)
      }
    }

    handleRedirectResult();
    return () => {
      mounted = false;
    }

  }, [router])

  async function handleGoogleSignIn() {
    setError(null);
    setLoading(true);

    try {
      await signInWithRedirect(auth, gooleProvider);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "google sign in failed"
      setError(message)
      setLoading(false)
    }
  }

  return (
    <div> 
      <div className='pl-10 bg-amber-700 pt-20'> 
        <h1 className='text-white text-3xl font-bold'>EstateEase</h1>
        <div className='flex pt-5 pb-3 gap-3'>
          <p className='text-black font-bold'>Already have an account?</p>
          <Link href="/login" className='text-white font-bold'>Login</Link>
        </div>
      </div>
      <div className='bg-white pt-15'>
        <p className='text-black font-bold pl-20'>Create your account</p>
        <div className=''>
          <button onClick={handleGoogleSignIn} className='flex items-center justify-center gap-3 border-2 border-gray-500 text-1xl bg-white text-black w-60 h-12 rounded-xl ml-20 mt-5'>
            <Image src="/images/google.png" alt="Google" width={20} height={10} />
            <p className='text-black font-bold'>Login with google</p>
          </button>
        </div>
        <div className='flex items-center justify-center gap-5 pt-5'>
          <Image src="/images/Line.png" alt="" width={90} height={10}/>
          <p className='text-black font-bold text-center'>or</p>
          <Image src="/images/Line.png" alt="" width={90} height={10}/>
        </div>
        <form action="" className='flex flex-col gap-5 pt-10 justify-center items-center position-absolute'>
          <input type="Full name" placeholder="Full name" className='border-2 border-gray-500 w-80 h-12 rounded-xl text-black pl-10'/>
          <input type="Email" placeholder="Email" className='border-2 border-gray-500 w-80 h-12 rounded-xl text-black pl-10' />
          <input type="Password" placeholder="Password" className='border-2 border-gray-500 w-80 h-12 rounded-xl text-black pl-10' />
          <input type="Password Confirmation" placeholder="Password Confirmation" className='border-2 border-gray-500 w-80 h-12 rounded-xl text-black pl-10' />
        </form>
        <div className='flex flex-col items-center justify-center pb-20'>
          <p className='text-black font-bold text-center pt-10'>I agree to all Terms, Privacy Policy and Fees</p>
          <Link href="/" className='flex items-center justify-center border-none text-1xl bg-amber-800 text-white w-80 h-12 rounded-xl mt-5'>Sign up</Link>
        </div>
      </div>
    </div>
  )
    
}

export default signup

