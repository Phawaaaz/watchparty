import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const ProfilePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="pb-24 md:pb-12 min-h-screen relative transition-colors duration-300"
        >
            <main className="px-6 md:px-12 py-12 md:py-20 max-w-5xl mx-auto pt-24 md:pt-32">

                {/* Header Profile */}
                <header className="mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="relative group cursor-pointer shrink-0"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full blur-[20px] opacity-0 dark:opacity-30 group-hover:opacity-50 dark:group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                            <img src="https://i.pravatar.cc/300?img=33" alt="Akinola Fawaz" className="w-full h-full object-cover grayscale-[0.2] transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                        </div>
                    </motion.div>

                    <div className="text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">Akinola Fawaz</h1>
                            <span className="bg-brand-500 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-[0_0_15px_rgba(51,188,161,0.5)] h-max mt-1 uppercase tracking-widest">Premium</span>
                        </div>
                        <p className="text-gray-500 font-medium mb-8 flex items-center justify-center md:justify-start gap-2">
                            <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Lagos, NGA
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <StatCard label="Parties Hosted" value="124" />
                            <StatCard label="Minutes Viewed" value="4.2k" />
                            <StatCard label="Friends" value="56" />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative z-10">

                    {/* Activity History */}
                    <section className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-[11px] font-black text-gray-400 dark:text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                                Recent Activity <span className="h-px flex-1 bg-gray-200 dark:bg-white/5"></span>
                            </h3>
                            <div className="space-y-4">
                                <HistoryItem movie="Blade Runner 2049" date="Today" type="Hosted public room" image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80" />
                                <HistoryItem movie="Inception" date="Mar 24, 2026" type="Watched with 4 friends" image="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80" />
                                <HistoryItem movie="Spider-Man" date="Mar 15, 2026" type="Attended screening" image="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=400&q=80" />
                            </div>
                        </div>
                    </section>

                    {/* Top Genres / Highlights */}
                    <section className="space-y-8">
                        <div>
                            <h3 className="text-[11px] font-black text-gray-400 dark:text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                                Top Genres <span className="h-px flex-1 bg-gray-200 dark:bg-white/5"></span>
                            </h3>
                            <div className="bg-white dark:bg-[#121214] rounded-[2rem] border border-gray-200 dark:border-white/5 p-6 shadow-xl space-y-4">
                                <GenreBar name="Sci-Fi" percent={85} color="bg-brand-500" />
                                <GenreBar name="Action" percent={65} color="bg-indigo-500" />
                                <GenreBar name="Thriller" percent={45} color="bg-purple-500" />
                                <GenreBar name="Horror" percent={20} color="bg-rose-500" />
                            </div>
                        </div>
                    </section>
                </div>

            </main>
        </motion.div>
    );
};

const StatCard = ({ label, value }: { label: string, value: string }) => (
    <div className="bg-white dark:bg-[#121214] px-5 py-4 rounded-[1.5rem] border border-gray-200 dark:border-white/5 shadow-md dark:shadow-xl flex-1 md:flex-none min-w-[120px] transition-colors duration-300">
        <div className="text-2xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">{value}</div>
        <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
);

const HistoryItem = ({ movie, date, type, image }: { movie: string, date: string, type: string, image: string }) => (
    <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center p-3 rounded-[2rem] bg-white dark:bg-[#121214] border border-gray-100 dark:border-white/5 shadow-sm group cursor-pointer transition-all duration-300 hover:border-brand-500/50"
    >
        <div className="w-16 h-16 rounded-[1.25rem] overflow-hidden mr-5 shadow-inner flex-shrink-0 relative">
            <img src={image} alt={movie} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-5 h-5 text-white fill-white" />
            </div>
        </div>
        <div className="flex-grow">
            <div className="flex justify-between items-start">
                <h4 className="font-extrabold text-gray-900 dark:text-white mb-1 tracking-tight pr-4">{movie}</h4>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-full whitespace-nowrap">{date}</span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{type}</p>
        </div>
    </motion.div>
);

const GenreBar = ({ name, percent, color }: { name: string, percent: number, color: string }) => (
    <div>
        <div className="flex justify-between text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            <span>{name}</span>
            <span>{percent}%</span>
        </div>
        <div className="h-2 w-full bg-gray-100 dark:bg-black/50 rounded-full overflow-hidden border border-gray-200 dark:border-transparent">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full ${color} rounded-full`}
            />
        </div>
    </div>
);

export default ProfilePage;
