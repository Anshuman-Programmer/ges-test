import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export type Toast = {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-center';
};

export const useToast = create((set) => ({
    toasts: [],
    addToast: (message: string = "Please enter a message", type: Toast['type'] = "success", position: Toast['position'] = "bottom-center") => set((state: { toasts: Toast[] }) => {
        const id = uuidv4();
        return ({ toasts: [...state.toasts, { id, message, type, position }] })
    }),
    removeToast: (id: string) => set((state: { toasts: Toast[] }) => ({ toasts: state.toasts.filter(toast => toast.id !== id) })),
}))


