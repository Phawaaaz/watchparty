import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User as UserIcon, PlaySquare, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

interface AuthPageProps {
    mode: 'login' | 'signup';
}

const AuthPage = ({ mode }: AuthPageProps) => {
    const isLogin = mode === 'login';
    const navigate = useNavigate();

    // Form states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;

        if (!isLogin && name.length < 2) {
            setNameError(true);
            setTimeout(() => setNameError(false), 500);
            valid = false;
        }

        if (!email.includes('@') || email.length < 5) {
            setEmailError(true);
            setTimeout(() => setEmailError(false), 500);
            valid = false;
        }

        if (password.length < 6) {
            setPassError(true);
            setTimeout(() => setPassError(false), 500);
            valid = false;
        }

        if (!valid) {
            setErrorMessage("Please fix the highlighted fields.");
            return;
        }

        setErrorMessage("");
        // Mock authentication - go to discover
        navigate('/discover');
    };

    return (
        <div className="min-h-screen w-full flex transition-colors duration-300">
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`w-full h-screen flex flex-col md:flex-row bg-white dark:bg-[#0f0f11] overflow-hidden ${isLogin ? 'md:flex-row-reverse' : ''}`}
            >
                {/* Visual / Image Side */}
                <motion.div layout className="w-full md:w-1/2 relative bg-black hidden md:block h-screen overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={isLogin ? 'login-img' : 'signup-img'}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.6, scale: 1.05 }}
                            exit={{ opacity: 0, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            src={isLogin
                                ? "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1200&auto=format&fit=crop"
                                : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop"}
                            alt="Cinematic background"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                        />
                    </AnimatePresence>
                    <div className={`absolute inset-0 bg-gradient-to-t ${isLogin ? 'from-indigo-900/80 via-black/40' : 'from-brand-900/80 via-black/40'} to-transparent transition-colors duration-700`} />
                    <motion.div layout className="absolute inset-x-0 bottom-0 p-12 lg:p-16 text-white text-left">
                        <div className="flex items-center gap-2 mb-6 opacity-80">
                            <PlaySquare className={`w-8 h-8 ${isLogin ? 'text-indigo-400' : 'text-brand-500'} fill-current`} />
                            <span className="font-extrabold text-xl tracking-tighter">WatchParty</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                            {isLogin ? "Welcome back to the sanctuary." : "Experience cinema with friends. Anywhere."}
                        </h2>
                        <p className="text-white/70 font-medium text-lg leading-relaxed max-w-sm">
                            {isLogin
                                ? "Log in to join active rooms, host your own streams, and sync up with your network."
                                : "Create your free account today and host synchronized watch parties in stunning high definition."}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Form Side */}
                <motion.div layout className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 xl:px-40 flex flex-col justify-center relative h-screen overflow-y-auto">
                    {/* Mobile Logo overlay */}
                    <div className="md:hidden flex items-center justify-center gap-2 mb-10">
                        <PlaySquare className="w-8 h-8 text-brand-500 fill-current" />
                        <span className="font-extrabold text-xl tracking-tighter text-gray-900 dark:text-white">WatchParty</span>
                    </div>

                    <div className="max-w-md w-full mx-auto">
                        <motion.div layout className="mb-10 text-center md:text-left">
                            <AnimatePresence mode="popLayout">
                                <motion.h1
                                    key={isLogin ? 'login-text' : 'signup-text'}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-3"
                                >
                                    {isLogin ? "Log in" : "Create an account"}
                                </motion.h1>
                            </AnimatePresence>
                            <motion.p layout className="text-gray-500 dark:text-white/50 font-medium text-sm">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                                <Link
                                    to={isLogin ? "/signup" : "/login"}
                                    className="text-brand-600 dark:text-brand-500 font-bold hover:underline underline-offset-4"
                                >
                                    {isLogin ? "Sign up" : "Log in"}
                                </Link>
                            </motion.p>
                        </motion.div>

                        <motion.form layout onSubmit={handleSubmit} className="space-y-5">
                            <AnimatePresence mode="wait">
                                {errorMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-red-500 font-bold text-sm bg-red-500/10 py-3 px-4 rounded-xl border border-red-500/20"
                                    >
                                        {errorMessage}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence mode="popLayout">
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0, overflow: 'hidden' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="relative group"
                                            animate={nameError ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${nameError ? 'text-red-500' : 'text-gray-400 group-focus-within:text-brand-500'}`}>
                                                <UserIcon className="w-5 h-5" />
                                            </div>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => { setName(e.target.value); setNameError(false); }}
                                                placeholder="Full Name"
                                                className={`w-full bg-gray-50 dark:bg-white/5 border ${nameError ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-gray-200 dark:border-white/10'} text-gray-900 dark:text-white rounded-2xl py-4 pl-12 pr-4 text-[15px] font-semibold focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 shadow-inner transition-all placeholder-gray-400 dark:placeholder-white/40`}
                                            />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.div
                                layout
                                className="relative group"
                                animate={emailError ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${emailError ? 'text-red-500' : 'text-gray-400 group-focus-within:text-brand-500'}`}>
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                                    placeholder="Email address"
                                    className={`w-full bg-gray-50 dark:bg-white/5 border ${emailError ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-gray-200 dark:border-white/10'} text-gray-900 dark:text-white rounded-2xl py-4 pl-12 pr-4 text-[15px] font-semibold focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 shadow-inner transition-all placeholder-gray-400 dark:placeholder-white/40`}
                                />
                            </motion.div>

                            <motion.div
                                className="relative group"
                                animate={passError ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors ${passError ? 'text-red-500' : 'text-gray-400 group-focus-within:text-brand-500'}`}>
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setPassError(false); }}
                                    placeholder="Password"
                                    className={`w-full bg-gray-50 dark:bg-white/5 border ${passError ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-gray-200 dark:border-white/10'} text-gray-900 dark:text-white rounded-2xl py-4 pl-12 pr-4 text-[15px] font-semibold focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 shadow-inner transition-all placeholder-gray-400 dark:placeholder-white/40`}
                                />
                            </motion.div>

                            {isLogin && (
                                <div className="flex justify-end pt-1">
                                    <a href="#" className="text-[13px] font-bold text-gray-500 hover:text-brand-600 dark:hover:text-brand-500 transition-colors">Forgot password?</a>
                                </div>
                            )}

                            <motion.div layout>
                                <Button
                                    type="submit"
                                    fullWidth
                                    className="py-4 rounded-2xl mt-4 shadow-lg text-white dark:text-black hover:-translate-y-1"
                                    icon={<ArrowRight className="w-5 h-5" />}
                                >
                                    {isLogin ? "Log in" : "Create Account"}
                                </Button>
                            </motion.div>
                        </motion.form>

                        <motion.div layout className="mt-8 relative flex items-center justify-center">
                            <span className="w-full h-px bg-gray-200 dark:bg-white/10 absolute inset-x-0" />
                            <span className="relative bg-white dark:bg-[#121214] px-4 text-[11px] font-bold tracking-widest uppercase text-gray-400 dark:text-white/40">Or continue with</span>
                        </motion.div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold text-[14px] transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold text-[14px] transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                GitHub
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div >
    );
};

export default AuthPage;
