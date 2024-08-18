// app/admin/login/page.js
'use client';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle login
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Bank Official Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input {...register('username', { required: true })}
                 className="w-full mt-1 p-2 border rounded" />
          {errors.username && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input {...register('password', { required: true })}
                 type="password" className="w-full mt-1 p-2 border rounded" />
          {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
        </div>
        {/* 2FA field */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
