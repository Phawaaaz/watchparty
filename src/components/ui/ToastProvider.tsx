import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import Toast from './Toast';
import type { ToastType } from './Toast';

interface ToastData {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextData {
    addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextData | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const addToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 4000); // 4 second lifetime
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast key={toast.id} message={toast.message} type={toast.type}
                            onClose={() => setToasts(t => t.filter(x => x.id !== toast.id))} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within ToastProvider");
    return context;
};
