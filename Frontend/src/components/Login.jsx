import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from '../service/api';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      console.log(response.data); // Handle login success
      navigate('/'); // Redirect to home or another page
    } catch (error) {
      console.error('Login failed', error); // Handle login failure
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white w-[450px]">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your Email' className='w-80 py-1 px-3 rounded-md outline-none' {...register("email", { required: true })} />
              <br />
              {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" placeholder='Enter your Password' className='w-80 py-1 px-3 rounded-md outline-none' {...register("password", { required: true })} />
              <br />
              {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
            </div>
            <div className='flex justify-between mt-9'>
              <button className='bg-yellow-400 text-white rounded-md px-3 py-1 hover:bg-yellow-600 duration-300'>Login</button>
              <p className='py-1'>Don't have account? <Link to='/signup' className='underline text-blue-600 cursor-pointer px-1'>Sign up</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
