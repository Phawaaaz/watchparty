import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, MessageCircle, Settings, Users, ArrowLeft, Send, Check } from 'lucide-react';

const WatchPartyRoom = () => {
    const navigate = useNavigate();
    const { roomId } = useParams();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden font-sans select-none flex">
            {/* Main Stage (Video Background) */}
            <div className={`relative h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex-grow`}
                style={{ width: isSidebarOpen ? 'calc(100% - 380px)' : '100%' }}>

                {/* Simulated Fullscreen Video */}
                <img
                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=100"
                    alt="Current Video"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Subtile Vignette Overlay for cinematic feel */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/80 pointer-events-none" />

                {/* Top Action Bar - Floating (Keeps Dark UI for video legibility) */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-40 bg-gradient-to-b from-black/60 to-transparent"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md rounded-full text-white/80 hover:text-white transition group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-semibold tracking-wide">Leave Room</span>
                    </button>

                    {/* Live Sync Badge */}
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2.5 px-4 py-2 bg-red-500/10 border border-red-500/20 backdrop-blur-md rounded-full">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                            </span>
                            <span className="text-[11px] font-bold tracking-widest text-red-500 uppercase">Live Sync Active</span>
                        </div>
                        <div className="flex -space-x-3 hover:space-x-1 transition-all cursor-pointer">
                            <WatcherBubble src="https://i.pravatar.cc/100?img=33" isHost />
                            <WatcherBubble src="https://i.pravatar.cc/100?img=12" />
                            <WatcherBubble src="https://i.pravatar.cc/100?img=5" />
                            <div className="w-10 h-10 rounded-full border-2 border-black bg-white/10 backdrop-blur flex items-center justify-center text-[10px] font-bold text-white shadow-xl z-10">+4</div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Video Controls Overlay (Keeps Dark UI) */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-24 bg-gradient-to-t from-black via-black/60 to-transparent z-40 transition-opacity duration-300">
                    {/* Timeline */}
                    <div className="relative group cursor-pointer w-full h-8 flex items-center mb-2">
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden relative">
                            {/* Buffer bar */}
                            <div className="absolute top-0 left-0 h-full w-[45%] bg-white/30" />
                            {/* Played bar */}
                            <div className="absolute top-0 left-0 h-full w-[32%] bg-[#33bca1] shadow-[0_0_10px_rgba(51,188,161,0.5)]" />
                        </div>
                        {/* Playhead handle */}
                        <div className="absolute left-[32%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-opacity" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-white text-sm">
                            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#33bca1] transition-colors focus:outline-none hover:scale-110 active:scale-95 duration-200">
                                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                            </button>
                            <div className="flex items-center gap-3 hover:text-[#33bca1] transition-colors group cursor-pointer">
                                <Volume2 className="w-5 h-5" />
                                <div className="w-0 overflow-hidden group-hover:w-20 transition-all duration-300 ease-out">
                                    <div className="w-20 bg-white/20 h-1.5 rounded-full relative"><div className="w-2/3 h-full bg-[#33bca1] rounded-full" /></div>
                                </div>
                            </div>
                            <span className="font-medium tracking-wide text-white/70 select-none">34:12 <span className="mx-1 text-white/30">/</span> 1:45:00</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <h2 className="text-white/80 font-bold tracking-tight text-lg shadow-black drop-shadow-md hidden md:block">
                                Interstellar (2014) <span className="px-2 py-0.5 ml-2 bg-white/10 rounded text-[9px] uppercase tracking-wider text-white/50 border border-white/5">Host: Alex</span>
                            </h2>
                        </div>

                        <div className="flex items-center gap-4 text-white">
                            <button onClick={() => navigate(`/room/${roomId}/host`)} className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 rounded-full border border-white/5 transition-all text-xs font-semibold">
                                <Settings className="w-4 h-4" /> Room Settings
                            </button>
                            <button
                                onClick={() => setSidebarOpen(!isSidebarOpen)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isSidebarOpen ? 'bg-[#33bca1]/20 text-[#33bca1]' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                            >
                                <MessageCircle className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition focus:outline-none">
                                <Maximize className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar (Chat & Social) - Dynamic Light/Dark */}
            <AnimatePresence initial={false}>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 380, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.4 }}
                        className="bg-gray-50 dark:bg-[#0f0f11] border-l border-gray-200 dark:border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] dark:shadow-[-20px_0_40px_rgba(0,0,0,0.5)] flex flex-col relative z-50 shrink-0 h-full w-[380px] transition-colors duration-300"
                    >
                        {/* Sidebar Header */}
                        <div className="h-20 px-6 border-b border-gray-200 dark:border-white/5 flex items-center justify-between shrink-0 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm transition-colors">
                            <h3 className="text-gray-900 dark:text-white font-bold tracking-wide flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#33bca1]" /> Crew Chat
                            </h3>
                            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/5">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-grow overflow-y-auto px-5 py-6 space-y-6 flex flex-col hide-scrollbar scroll-smooth">
                            <ChatMessage
                                name="Marcus" time="8:42 PM" avatar="https://i.pravatar.cc/100?img=12"
                                message="That opening sequence is breathtaking! The cinematography is on another level."
                            />
                            <ChatMessage
                                name="Alex (Host)" time="8:43 PM" avatar="https://i.pravatar.cc/100?img=33"
                                message="I know, right? Wait until the scene at the 45-minute mark. You're going to love the lighting."
                                isHost
                            />

                            {/* System Message */}
                            <div className="flex items-center justify-center gap-3 my-4">
                                <div className="h-px bg-gray-200 dark:bg-white/5 flex-grow transition-colors" />
                                <span className="text-[10px] text-gray-500 dark:text-white/30 font-bold uppercase tracking-widest px-2 relative transition-colors">
                                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#33bca1] rounded-full" />
                                    Host played the video
                                </span>
                                <div className="h-px bg-gray-200 dark:bg-white/5 flex-grow transition-colors" />
                            </div>

                            <ChatMessage
                                name="Jane O." time="8:46 PM" avatar="https://i.pravatar.cc/100?img=5"
                                message="Great choice for movie night. The atmosphere is top tier."
                            />
                            <ChatMessage
                                name="You" time="8:48 PM" avatar="https://i.pravatar.cc/100?img=1"
                                message="Can't wait to see the black hole scene in 4k!"
                                isSelf
                            />
                        </div>

                        {/* Chat Input */}
                        <div className="p-4 bg-white dark:bg-[#0a0a0c] border-t border-gray-200 dark:border-white/5 shrink-0 relative transition-colors">
                            {/* Quick Reactions */}
                            <div className="absolute -top-12 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                                <div className="flex gap-2 pointer-events-auto">
                                    <ReactionBtn emoji="❤️" />
                                    <ReactionBtn emoji="😂" />
                                    <ReactionBtn emoji="😮" />
                                    <ReactionBtn emoji="🍿" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-gray-50 dark:bg-white/[0.04] p-1.5 rounded-2xl border border-gray-200 dark:border-white/[0.05] focus-within:border-[#33bca1]/50 dark:focus-within:border-[#33bca1]/30 focus-within:bg-white dark:focus-within:bg-white/[0.08] shadow-sm dark:shadow-none transition-all duration-300">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-grow bg-transparent text-gray-900 dark:text-white text-sm py-2 px-3 focus:outline-none placeholder:text-gray-400 dark:placeholder:text-white/30 font-medium transition-colors"
                                />
                                <button className="w-10 h-10 rounded-xl bg-[#33bca1] text-white dark:text-black flex items-center justify-center flex-shrink-0 hover:bg-[#259682] hover:scale-[1.05] active:scale-95 transition-all shadow-[0_4px_15px_rgba(51,188,161,0.3)] dark:shadow-[0_0_15px_rgba(51,188,161,0.3)]">
                                    <Send className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const WatcherBubble = ({ src, isHost }: { src: string, isHost?: boolean }) => (
    <div className="relative group shrink-0">
        <div className={`w-10 h-10 rounded-full overflow-hidden border-2 shadow-xl shrink-0 transition-transform hover:scale-110 z-10 relative ${isHost ? 'border-[#33bca1] z-20' : 'border-black'}`}>
            <img src={src} className="w-full h-full object-cover" alt="User" />
        </div>
        {isHost && (
            <div className="absolute -bottom-1 -right-1 bg-[#33bca1] text-black text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-lg z-30">
                <Check className="w-2.5 h-2.5" strokeWidth={4} />
            </div>
        )}
    </div>
);

const ChatMessage = ({ name, time, message, isHost, isSelf, avatar }: { name: string, time: string, message: string, isHost?: boolean, isSelf?: boolean, avatar: string }) => (
    <div className={`flex gap-3 group ${isSelf ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isSelf && (
            <div className="shrink-0 relative mt-1">
                <img src={avatar} alt={name} className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10" />
                {isHost && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#33bca1] border-2 border-white dark:border-[#0f0f11] rounded-full transition-colors" />}
            </div>
        )}
        <div className={`flex flex-col max-w-[80%] ${isSelf ? 'items-end' : 'items-start'}`}>
            <div className="flex items-center gap-2 mb-1.5 px-1">
                {!isSelf && <span className={`text-[11px] font-bold tracking-wide ${isHost ? 'text-[#33bca1]' : 'text-gray-500 dark:text-white/60'}`}>{name}</span>}
                <span className="text-[10px] text-gray-400 dark:text-white/30 font-medium transition-colors">{time}</span>
            </div>
            <div className={`px-4 py-3 rounded-2xl text-[14px] leading-relaxed relative transition-colors ${isSelf
                ? 'bg-brand-500 text-white dark:bg-[#33bca1]/10 dark:border-[#33bca1]/20 rounded-tr-sm shadow-md dark:shadow-[0_0_20px_rgba(51,188,161,0.05)] border border-transparent'
                : 'bg-white dark:bg-white/[0.04] text-gray-800 dark:text-white/90 border border-gray-100 dark:border-white/[0.05] shadow-sm dark:shadow-none rounded-tl-sm'
                }`}>
                {message}
            </div>
        </div>
    </div>
);

const ReactionBtn = ({ emoji }: { emoji: string }) => (
    <button className="w-9 h-9 rounded-full bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/5 flex items-center justify-center text-lg hover:bg-gray-50 dark:hover:bg-[#27272a] hover:scale-125 hover:-translate-y-2 transition-all duration-300 shadow-md dark:shadow-xl z-10 active:scale-95">
        {emoji}
    </button>
);

export default WatchPartyRoom;
