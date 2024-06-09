"use client"
import { Toast, useToast } from '@/hooks/useToast';
import Link from 'next/link';

export default function Home() {
  const { addToast } = useToast((state: any) => ({ addToast: state.addToast }));

  const showToast = (type: 'success' | 'error' | 'warning' | 'info', position: Toast['position'] = "bottom-center") => {
    addToast(`This is a ${type} message`, type, position);
  };

  return (
    <div className="p-8 bg-gray-200 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl text-gray-700 font-bold mb-4 text-center">Toast Notifications</h1>
      <div className=" p-10 flex flex-col bg-slate-50 gap-4 rounded-lg shadow-lg w-full max-w-96">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
          onClick={() => showToast('success')}
        >
          Show Success
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 w-full"
          onClick={() => showToast('warning', 'top-center')}
        >
          Show Warning
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
          onClick={() => showToast('error', "top-left")}
        >
          Show Error
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          onClick={() => showToast('info', "top-right")}
        >
          Show Info
        </button>
      </div>
      <p className='mt-4 text-gray-600 text-sm'>Made by <Link className='text-blue-500 hover:underline' href="https://anshuman.site/" target='_blank'>Anshuman</Link></p>
    </div>
  );
}
