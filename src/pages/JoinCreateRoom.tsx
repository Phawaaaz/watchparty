import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { ChevronLeft, Zap, Copy, LogIn } from 'lucide-react';

const JoinCreateRoom = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'create' | 'join'>('create');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background glowing effects removed */}

            {/* Mobile Back Header */}
            <header className="fixed top-0 left-0 right-0 flex justify-center items-center p-6 md:hidden z-20 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
                <button onClick={() => navigate(-1)} className="absolute left-6 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors p-2 -ml-2">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="font-extrabold text-gray-400 dark:text-white/50 tracking-widest text-[10px] uppercase">Cinematic Sanctuary</span>
            </header>

            <motion.div
                layout
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full max-w-lg md:bg-white md:dark:bg-black/60 md:backdrop-blur-3xl md:border-y border-gray-200 md:dark:border-white/10 md:p-12 relative z-10 shadow-xl md:shadow-2xl transition-colors duration-300 pt-24 md:pt-32"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-6xl font-black leading-tight mb-4 text-center text-gray-900 dark:text-white tracking-tighter transition-colors"
                >
                    Get Started.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 dark:text-white/60 font-medium text-center mb-12 text-sm md:text-base max-w-xs mx-auto leading-relaxed transition-colors"
                >
                    Enter your details to create or join a private screening.
                </motion.p>

                <div className="space-y-8 relative z-20">
                    <div className="group">
                        <label className="block text-[11px] font-bold text-gray-500 dark:text-white/40 tracking-widest uppercase mb-2.5 ml-2 transition-colors group-focus-within:text-brand-600 dark:group-focus-within:text-brand-500">YOUR NAME</label>
                        <input
                            type="text"
                            defaultValue="Akinola Fawaz"
                            className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl py-4 px-6 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-inner transition-all duration-300 backdrop-blur-md"
                        />
                    </div>

                    <div className="flex bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-[1.25rem] p-1.5 shadow-inner backdrop-blur-md transition-colors">
                        <button
                            onClick={() => setActiveTab('create')}
                            className={`flex-1 py-3.5 text-xs font-black tracking-wide rounded-xl transition-all duration-300 relative ${activeTab === 'create' ? 'text-black shadow-sm' : 'text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            {activeTab === 'create' && <motion.div layoutId="tab-bg" className="absolute inset-0 bg-brand-500 rounded-xl shadow-[0_0_15px_rgba(51,188,161,0.3)] z-0" />}
                            <span className="relative z-10">Create New Room</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('join')}
                            className={`flex-1 py-3.5 text-xs font-black tracking-wide rounded-xl transition-all duration-300 relative ${activeTab === 'join' ? 'text-black shadow-sm' : 'text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            {activeTab === 'join' && <motion.div layoutId="tab-bg" className="absolute inset-0 bg-brand-500 rounded-xl shadow-[0_0_15px_rgba(51,188,161,0.3)] z-0" />}
                            <span className="relative z-10">Join with ID</span>
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'create' ? (
                            <motion.div
                                key="create"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="bg-brand-500/10 dark:bg-brand-500/5 border border-brand-500/20 rounded-[2rem] p-8 relative overflow-hidden group shadow-inner dark:shadow-[inset_0_0_20px_rgba(51,188,161,0.05)] transition-colors"
                            >
                                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl group-hover:bg-brand-500/30 transition-colors duration-500"></div>
                                <label className="block text-[11px] font-bold text-brand-600 dark:text-brand-500 tracking-widest uppercase mb-3 flex items-center gap-2">
                                    <Zap className="w-4 h-4 fill-brand-500" /> ROOM IDENTITY
                                </label>
                                <div className="flex justify-between items-center relative z-10">
                                    <span className="text-2xl md:text-3xl font-mono font-black tracking-wider text-gray-900 dark:text-white">NOIR-442</span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-brand-600 dark:text-brand-500 bg-white dark:bg-brand-500/10 p-3 rounded-2xl hover:bg-brand-500 hover:text-black dark:hover:bg-brand-500 dark:hover:text-black shadow-sm dark:shadow-none hover:shadow-[0_0_15px_rgba(51,188,161,0.6)] transition-all duration-300 border border-brand-500/20"
                                    >
                                        <Copy className="w-5 h-5" />
                                    </motion.button>
                                </div>
                                <p className="text-gray-500 dark:text-white/50 font-medium text-[13px] mt-4 leading-relaxed">Share this unique ID with your guests to begin the synchronized experience.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="join"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="space-y-2 pt-2"
                            >
                                <label className="block text-[11px] font-bold text-gray-500 dark:text-white/40 tracking-widest uppercase mb-2.5 ml-2">ENTER ROOM ID</label>
                                <input
                                    type="text"
                                    placeholder="e.g. SKY-FALL-77"
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl py-4 px-6 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-inner transition-all duration-300 backdrop-blur-md placeholder-gray-400 dark:placeholder-white/40"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div className="pt-2">
                        <Button fullWidth onClick={() => navigate('/room/NOIR-442')} icon={<LogIn className="w-5 h-5" />}>
                            {activeTab === 'create' ? 'Start Party Now' : 'Join the Party'}
                        </Button>
                    </motion.div>

                    <p className="text-center text-gray-400 dark:text-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-6">
                        Trusted by 2,490+ enthusiasts weekly.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default JoinCreateRoom;
