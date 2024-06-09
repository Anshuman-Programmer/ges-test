"use client"
import React from 'react'
import ToastNotification from './ToastNotification'
import { useToast } from '@/hooks/useToast';

const Toaster = () => {

    const { toasts, removeToast } = useToast((state: any) => ({ toasts: state.toasts, addToast: state.addToast, removeToast: state.removeToast }));

    return toasts.map((toast: any) => (
        <ToastNotification
            key={toast.id}
            message={toast.message}
            type={toast.type}
            position={toast.position}
            onClose={() => removeToast(toast.id)}
        />
    ))
}

export default Toaster