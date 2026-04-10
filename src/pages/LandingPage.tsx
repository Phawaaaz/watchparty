import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlaySquare, Sparkles, ChevronRight, Video, Users } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative overflow-hidden transition-colors duration-300 selection:bg-brand-500 selection:text-black">
            {/* Ambient Background Illumination Removed */}

            {/* Mobile Header */}
            <header className="md:hidden relative z-20 flex justify-center items-center p-6 bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 flex items-center justify-center bg-brand-500 rounded shadow-[0_4px_15px_rgba(51,188,161,0.3)] dark:shadow-[0_0_15px_rgba(51,188,161,0.4)]">
                        <PlaySquare className="w-3 h-3 text-white dark:text-black fill-white dark:fill-black" />
                    </div>
                </div>
            </header>

            <main className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-32 pb-0 px-6 max-w-5xl mx-auto w-full text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl mb-8 group cursor-pointer hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                >
                    <Sparkles className="w-4 h-4 text-brand-500" />
                    <span className="text-xs font-bold text-gray-700 dark:text-white/80 tracking-wide uppercase">Introducing Cinematic Mode</span>
                    <ChevronRight className="w-3 h-3 text-gray-400 dark:text-white/40 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </motion.div>

                {/* Hero Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-[96px] font-black tracking-[-0.04em] text-gray-900 dark:text-white leading-[1.05] mb-6"
                >
                    Watch together.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-600 via-brand-500 to-indigo-600 dark:from-brand-300 dark:via-brand-500 dark:to-indigo-500 drop-shadow-sm dark:drop-shadow-xl">Without borders.</span>
                </motion.h1>

                {/* Hero Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-white/50 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    Synchronized streaming, theater-grade reactions, and crystal-clear 4K quality. Step into your private digital cinema.
                </motion.p>

                {/* Call to Action Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto"
                >
                    <button
                        onClick={() => navigate('/signup')}
                        className="w-full sm:w-auto px-8 py-4 bg-brand-500 text-white dark:text-black font-extrabold text-[15px] rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-400 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(51,188,161,0.3)] dark:shadow-[0_0_30px_rgba(51,188,161,0.3)]"
                    >
                        <Video className="w-5 h-5 fill-white/20 dark:fill-black/20" /> Host a Room
                    </button>
                    <button
                        onClick={() => navigate('/join')}
                        className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 font-bold text-[15px] rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all active:scale-95 shadow-sm dark:shadow-none"
                    >
                        <Users className="w-5 h-5 text-gray-400 dark:text-white/50" /> Join Existing
                    </button>
                </motion.div>

                {/* Mock UI Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 w-full relative max-w-[1000px] mx-auto z-0"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
                >
                    {/* Glow behind mock */}
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />

                    <div className="relative bg-gray-100/50 dark:bg-black/40 border-t border-gray-200 dark:border-white/10 pt-3 px-3 shadow-2xl overflow-hidden backdrop-blur-md">
                        {/* Video Layer */}
                        <div className="relative w-full aspect-video rounded-t-[2rem] rounded-b-md overflow-hidden bg-black dark:bg-[#09090b]">
                            <img
                                src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop"
                                alt="Platform preview"
                                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                            />
                            {/* Inner UI Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#09090b]/80 via-transparent to-transparent flex items-end p-8">
                                <div className="w-full flex items-center justify-between bg-black/60 dark:bg-black/40 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/10 shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 hover:bg-brand-500 rounded-full flex items-center justify-center transition-colors border border-white/10 cursor-pointer group">
                                            <PlaySquare className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                        </div>
                                        <div className="hidden sm:block h-2 w-48 md:w-96 bg-white/10 rounded-full overflow-hidden border border-white/5">
                                            <div className="h-full w-[40%] bg-brand-500 rounded-full relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -space-x-3">
                                        {[11, 12, 13, 15].map((id) => (
                                            <img key={id} src={`https://i.pravatar.cc/100?img=${id}`} className="w-10 h-10 rounded-full border-[3px] border-black/80" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </main>
        </div>
    );
};

export default LandingPage;
