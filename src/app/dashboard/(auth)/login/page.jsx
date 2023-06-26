import ContLayout from '@/components/ContLayout/ContLayout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FcGoogle} from "react-icons/fc"
const Login = () => {
  return (
    <section>
      <ContLayout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className='pb-3 w-[450px] mx-auto border border-slate-400 rounded-md'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 ">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm 
                sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 ">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold hover:text-emerald-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm 
                sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Sign In Now</button>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md border px-3 py-1.5 text-sm font-semibold leading-6 hover:bg-slate-600 hover:text-white duration-100 shadow-sm "><FcGoogle className='text-xl mt-[2px] mr-3' /> Sign In Google</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm ">
            Not a member? 
            <Link href="/dashboard/register" className="font-semibold leading-6 ml-1 underline hover:text-emerald-500">Register</Link>
          </p>
        </div>
        </div>
    </div>
      </ContLayout>
    </section>
  )
}

export default Login