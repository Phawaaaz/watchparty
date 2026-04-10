import React from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    children: React.ReactNode;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    icon,
    fullWidth = false,
    isLoading = false,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = "relative flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
    const sizeStyles = "px-6 py-3.5 text-[15px]"; // Slightly larger text
    const widthStyles = fullWidth ? "w-full" : "";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(51,188,161,0.3)] hover:shadow-[0_0_30px_rgba(51,188,161,0.5)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border-2 border-primary/20 text-primary hover:bg-primary/10",
        ghost: "bg-transparent text-primary hover:bg-primary/10",
        glass: "glass text-foreground hover:bg-white/10 border-white/20"
    };

    return (
        <button
            className={cn(baseStyles, sizeStyles, widthStyles, variants[variant], className)}
            disabled={disabled || isLoading}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {!isLoading && children}
                {!isLoading && icon && <span>{icon}</span>}
            </span>
            {/* Glossy overlay effect for primary button */}
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </button>
    );
};

export default Button;
