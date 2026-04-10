import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Users, PlaySquare, ChevronRight, Zap, Filter, ShieldCheck, TrendingUp, Compass, Clock, Star } from 'lucide-react';
import { MovieCardSkeleton } from '../components/ui/Skeleton';

const DiscoverPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("trending");
    const [isLoading, setIsLoading] = useState(true);

    // Simulate network request loading time for micro-interactions
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="pb-24 md:pb-12 min-h-screen relative overflow-hidden bg-transparent"
        >
            {/* Background glowing effects removed */}

            <main className="px-6 md:px-12 py-8 relative z-10 w-full max-w-[1400px] mx-auto pt-24 md:pt-32">

                {/* Search & Filter Header */}
                <motion.div variants={itemVariants} className="mb-14 mt-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 w-max mb-6 shadow-sm dark:shadow-none">
                        <ZoomInIcon />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-700 dark:text-white/80">Explore the multiverse</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white tracking-tighter leading-tight transition-colors duration-300">
                        Discover <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 dark:from-brand-300 dark:via-brand-500 dark:to-indigo-400">Live Parties</span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4 relative max-w-4xl">
                        <div className="flex-grow relative group">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-gray-400 dark:text-white/40 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-500 transition-colors duration-300" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by series, movie name or #room-id..."
                                className="w-full bg-white dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl py-5 pl-14 pr-6 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-md dark:shadow-2xl transition-all duration-300 outline-none placeholder-gray-400 dark:placeholder-white/40"
                            />
                        </div>
                        <button className="bg-gray-50 dark:bg-white/5 backdrop-blur-md hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-8 py-5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-3 shrink-0 active:scale-95 group shadow-sm dark:shadow-xl">
                            <SlidersHorizontal className="w-5 h-5 text-gray-500 dark:text-white/60 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors" />
                            <span>Filters</span>
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div
                            key="skeletons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10"
                        >
                            {Array.from({ length: 10 }).map((_, i) => (
                                <MovieCardSkeleton key={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10"
                        >
                            {/* MOCK_MOVIES mapping would go here */}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Trending Section */}
                <motion.section variants={itemVariants} className="mb-20 pt-8 border-t border-gray-200 dark:border-white/5 transition-colors">
                    <div className="flex justify-between items-end mb-8 group">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight flex items-center gap-3 transition-colors">
                                <Zap className="w-6 h-6 text-brand-600 dark:text-brand-500 fill-brand-500/20" /> Trending Now
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-white/50 font-medium">Global premieres and most active rooms right now</p>
                        </div>
                        <button className="text-gray-500 dark:text-white/60 text-sm font-bold hover:text-brand-600 dark:hover:text-brand-500 flex items-center gap-1 group-hover:pr-2 transition-all">
                            View All <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <TrendingCard
                            title="Inception"
                            rooms="42 Active Rooms"
                            image="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            tags={['Sci-Fi', 'Thriller']}
                        />
                        <TrendingCard
                            title="The Dark Knight"
                            rooms="28 Active Rooms"
                            image="https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            tags={['Action', 'Crime']}
                        />
                        <TrendingCard
                            title="Blade Runner 2049"
                            rooms="15 Active Rooms"
                            image="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            tags={['Sci-Fi', 'Mystery']}
                        />
                    </div>
                </motion.section>

                {/* Public Rooms Grid */}
                <motion.section variants={itemVariants}>
                    <div className="flex justify-between items-end mb-8 group">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight flex items-center gap-3 transition-colors">
                                <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400 fill-indigo-400/20" /> Open Lobbies
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-white/50 font-medium">Public screenings you can join instantly</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        <RoomCard name="Alex's Chill Vibes" movie="Spirited Away" participants={12} id="CHILL-SPIRIT" />
                        <RoomCard name="Movie Night!" movie="Everything Everywhere..." participants={45} id="EEAAO-PARTY" />
                        <RoomCard name="Weekend Classics" movie="The Godfather" participants={8} id="CLASSICS-01" />
                        <RoomCard name="Sci-Fi Marathon" movie="Dune (2021)" participants={31} id="DUNE-SYNC" />
                        <RoomCard name="Late Night Horror" movie="Hereditary" participants={22} id="SCARY-HOUR" />
                        <RoomCard name="Anime Central" movie="Your Name" participants={56} id="ANIME-WORLD" />
                        <RoomCard name="Animation Fans" movie="Spider-Verse" participants={99} id="SPIDER-WEB" />
                        <RoomCard name="Comedy Hour" movie="Superbad" participants={18} id="FUNNY-HA" />
                    </div>
                </motion.section>

            </main>
        </motion.div>
    );
};

// Helper icon
const ZoomInIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600 dark:text-brand-500 transition-colors">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
)

const TrendingCard = ({ title, rooms, image, tags }: { title: string, rooms: string, image: string, tags: string[] }) => (
    <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="relative h-[360px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-white/10"
    >
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 dark:via-[#09090b]/60 to-transparent p-8 flex flex-col justify-end">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

            <div className="relative z-10 flex gap-2 mb-5">
                {tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase bg-white/20 dark:bg-white/10 text-white px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg">{tag}</span>
                ))}
            </div>
            <h3 className="relative z-10 text-3xl font-black text-white mb-2 tracking-tighter drop-shadow-lg group-hover:text-brand-300 transition-colors">{title}</h3>
            <p className="relative z-10 text-brand-400 dark:text-brand-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_rgba(51,188,161,0.6)]"></span> {rooms}
            </p>
        </div>
    </motion.div>
);

const RoomCard = ({ name, movie, participants, id }: { name: string, movie: string, participants: number, id: string }) => (
    <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="bg-white dark:bg-[#121214] p-6 rounded-[24px] border border-gray-200 dark:border-white/5 hover:border-brand-500/50 dark:hover:border-brand-500/20 transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-none group cursor-pointer relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/0 dark:bg-brand-500/0 rounded-full blur-[50px] -me-10 -mt-10 group-hover:bg-brand-500/10 dark:group-hover:bg-brand-500/20 transition-colors duration-700 pointer-events-none" />

        <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#1a1a1f] border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-white/50 group-hover:bg-brand-500 group-hover:text-black group-hover:border-brand-500 transition-all duration-500 shadow-sm dark:shadow-none">
                <PlaySquare className="w-5 h-5 flex-shrink-0" />
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-[#1a1a1f] px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-[11px] font-bold text-gray-700 dark:text-white/80">{participants} <span className="hidden xl:inline-block">viewers</span></span>
            </div>
        </div>

        <h4 className="font-extrabold text-gray-900 dark:text-white text-lg mb-1 truncate tracking-tight">{name}</h4>
        <p className="text-gray-500 dark:text-white/50 text-[13px] font-medium mb-6 truncate">{movie}</p>

        <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex justify-between items-center text-[11px] uppercase font-bold tracking-widest text-gray-400 dark:text-white/40 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
            <span>#{id}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
    </motion.div>
);

export default DiscoverPage;
