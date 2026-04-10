import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
    const icons = {
        success: <CheckCircle2 className="w-5 h-5 text-brand-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        info: <Info className="w-5 h-5 text-indigo-500" />
    };

    const borders = {
        success: 'border-brand-500/20 dark:border-brand-500/10',
        error: 'border-red-500/20 dark:border-red-500/10',
        info: 'border-indigo-500/20 dark:border-indigo-500/10'
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`pointer-events-auto relative flex items-center gap-3 px-4 py-3 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xl border border-gray-200 dark:border-white/5 shadow-2xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl min-w-[300px] overflow-hidden group`}
        >
            {/* Glow behind */}
            <div className={`absolute inset-0 opacity-10 blur-xl ${borders[type].split(' ')[0].replace('border', 'bg')}`} />

            <div className="shrink-0 relative z-10">
                {icons[type]}
            </div>
            <p className="text-sm font-bold text-gray-900 dark:text-white pb-[1px] flex-grow relative z-10">
                {message}
            </p>
            <button
                onClick={onClose}
                className="shrink-0 p-1.5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors relative z-10"
            >
                <X className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </button>

            {/* Progress Bar */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 4, ease: "linear" }}
                className={`absolute bottom-0 inset-x-0 h-[2px] ${type === 'success' ? 'bg-brand-500' : type === 'error' ? 'bg-red-500' : 'bg-indigo-500'
                    } origin-left z-10 opacity-70`}
            />
        </motion.div>
    );
};

export default Toast;
