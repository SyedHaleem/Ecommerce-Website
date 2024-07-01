import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit= (data) => console.log(data)
  return (
    <div className='flex h-screen items-center justify-center'>
<div  className='w-[550px]  ' >
  <div className=" modal-box bg-slate-100 dark:bg-slate-800 dark:text-white relative  transition-all duration-500 ease-in-out transform hover:scale-95 hover:shadow-2lg">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg ">Signup</h3>
    <div className='mt-4 space-y-2'>
    <span>Name</span>
    <br/>
    <input type="text"  placeholder='Enter your Name' className='w-80 py-2 px-3 rounded-md outline-none' {...register("text", { required: true })}/>
    <br/>
    {errors.text && <span className='text-sm text-red-500'>Full name is required</span>}
  </div>

    <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br/>
    <input type="email"  placeholder='Enter your Email' className='w-80 py-2 px-3 rounded-md outline-none' {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
  </div>


  <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br/>
    <input type="password"  placeholder='Enter your Password' className='w-80 py-2 px-3 rounded-md outline-none' {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
  </div>

  <div className='flex justify-between mt-9 '>
    <button className='bg-yellow-400 text-white rounded-md px-3 py-1 hover:bg-yellow-600 duration-300'>Signup</button>
    {/* <p>Have account? <Link to='/' className='underline text-blue-600 cursor-pointer px-1'>Login</Link></p> */}
  </div>
  </form>
  </div>
  
</div>
    </div>
  )
}

export default Signup