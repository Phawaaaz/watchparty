import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ChevronLeft, Key, Settings as SettingsIcon, Link as LinkIcon, Edit3, MonitorPlay, Users, Play, Pause, FastForward } from 'lucide-react';

const HostControlCenter = () => {
    const navigate = useNavigate();
    const [syncEnabled, setSyncEnabled] = useState(true);

    return (
        <div className="min-h-screen flex flex-col pb-24 md:pb-12 transition-colors duration-300">
            {/* Header */}
            <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-white/5 relative z-20 bg-white/80 dark:bg-transparent sticky top-0 md:bg-transparent md:border-b-0 backdrop-blur-xl md:backdrop-blur-none transition-colors">
                <button onClick={() => navigate(-1)} className="text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors bg-white dark:bg-white/5 p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 shadow-sm dark:shadow-none">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand-500 rounded-lg transform rotate-3 shadow-[0_4px_10px_rgba(51,188,161,0.3)] dark:shadow-[0_0_10px_rgba(51,188,161,0.5)] flex items-center justify-center">
                        <Key className="w-3 h-3 text-white dark:text-black" />
                    </div>
                    <span className="font-bold text-lg tracking-tight hidden md:block text-gray-900 dark:text-white">Host Dashboard</span>
                    <span className="font-bold text-sm md:hidden text-gray-900 dark:text-white">Host</span>
                </div>
                <div className="w-9 h-9 flex items-center justify-center bg-white dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none hover:bg-gray-50 dark:hover:bg-white/10 cursor-pointer transition text-gray-500 dark:text-white/70">
                    <SettingsIcon className="w-4 h-4" />
                </div>
            </header>

            <main className="px-6 py-6 md:py-8 max-w-6xl mx-auto w-full relative z-10 pt-16 md:pt-4">

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">

                    {/* Left Column: Stream Setup & Info */}
                    <div className="xl:col-span-2 space-y-10">
                        {/* Stream Source */}
                        <section className="bg-white/90 dark:bg-black/40 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 dark:bg-brand-500/5 opacity-[0.4] dark:opacity-[0.2] rounded-full blur-3xl -mr-32 -mt-32 mix-blend-multiply dark:mix-blend-screen transition-opacity group-hover:opacity-[0.6] dark:group-hover:opacity-40"></div>

                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <label className="text-[11px] font-bold text-brand-600 dark:text-brand-500 tracking-widest uppercase flex items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Stream Config
                                </label>
                                <span className="text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gray-200 dark:border-white/10 shadow-sm flex items-center gap-1.5 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" /> Active Match
                                </span>
                            </div>

                            <div className="bg-gray-50 dark:bg-black/60 rounded-2xl p-2 mb-6 flex border border-gray-200 dark:border-white/10 shadow-inner group-focus-within:border-brand-500/50 transition-all relative z-10">
                                <div className="pl-4 pr-2 flex items-center justify-center">
                                    <LinkIcon className="w-4 h-4 text-gray-400 dark:text-white/30" />
                                </div>
                                <input
                                    type="text"
                                    defaultValue="https://stream.sanctuary.io/v/interstellar-4k"
                                    className="flex-grow bg-transparent text-gray-900 dark:text-white/90 text-[15px] px-2 py-3 focus:outline-none font-medium"
                                />
                                <button className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-xl transition text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white">
                                    <Edit3 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex gap-4 relative z-10">
                                <Button className="flex-1 py-4 rounded-xl shadow-lg border border-transparent hover:border-brand-500/30 text-white dark:text-black">Reload Engine</Button>
                                <Button variant="glass" className="px-6 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 shadow-sm dark:shadow-none">Test Sync</Button>
                            </div>
                        </section>

                        {/* Player Preview */}
                        <section className="bg-white/90 dark:bg-black/40 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors">

                            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 dark:from-brand-500/10 to-transparent opacity-50 dark:opacity-20 pointer-events-none transition-colors" />
                            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop" className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 dark:opacity-20 blur-sm pointer-events-none mix-blend-multiply dark:mix-blend-screen mask-image:linear-gradient(to_left,black,transparent)]" />
                            <div className="absolute inset-0 bg-gradient-to-l from-white/80 dark:from-[#09090b]/80 via-white/90 dark:via-[#09090b]/90 to-white dark:to-[#09090b] transition-colors" />

                            <div className="mb-10 md:mb-0 text-center md:text-left relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black mb-3 text-gray-900 dark:text-white tracking-tighter drop-shadow-sm dark:drop-shadow-md">Interstellar</h2>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-500 text-white dark:text-black px-2.5 py-1 rounded shadow-[0_2px_8px_rgba(51,188,161,0.4)] dark:shadow-brand-500/20">4K Ultra HD</span>
                                    <span className="text-[12px] font-bold tracking-widest uppercase text-gray-500 dark:text-white/50">45:12 / 2:49:00</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center space-y-8 relative z-10 w-full md:w-auto">
                                <div className="flex items-center space-x-6">
                                    <button className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition transform active:scale-95 bg-gray-100 dark:bg-white/5 p-3 rounded-full border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 shadow-sm dark:shadow-none">
                                        <Pause className="w-6 h-6 fill-current" />
                                    </button>

                                    <button className="w-20 h-20 bg-brand-500 text-white dark:text-black rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(51,188,161,0.3)] dark:shadow-[0_0_25px_rgba(51,188,161,0.4)] hover:scale-105 transition-all outline outline-4 outline-transparent hover:outline-brand-500/20">
                                        <Play className="w-8 h-8 fill-current ml-1" />
                                    </button>

                                    <button className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition transform active:scale-95 bg-gray-100 dark:bg-white/5 p-3 rounded-full border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 shadow-sm dark:shadow-none">
                                        <FastForward className="w-6 h-6 fill-current" />
                                    </button>
                                </div>

                                <div className="w-full flex items-center justify-between bg-gray-100 dark:bg-black/60 px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 shadow-inner min-w-[280px]">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-1.5 bg-white dark:bg-brand-500/20 rounded text-brand-500 border border-gray-200 dark:border-brand-500/20 shadow-sm dark:shadow-none">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <span className="text-[13px] font-bold text-gray-900 dark:text-white/90">Force Global Sync</span>
                                    </div>
                                    <button
                                        onClick={() => setSyncEnabled(!syncEnabled)}
                                        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${syncEnabled ? 'bg-brand-500 shadow-[0_2px_10px_rgba(51,188,161,0.3)] dark:shadow-[0_0_15px_rgba(51,188,161,0.5)]' : 'bg-gray-300 dark:bg-white/10 border border-gray-300 dark:border-white/10'}`}
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-300 shadow-sm ${syncEnabled ? 'left-7' : 'left-1'}`}></div>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Participants & Sharing */}
                    <div className="space-y-8 h-full flex flex-col">
                        <section className="bg-white/90 dark:bg-black/40 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors">
                            <h3 className="font-black text-xl mb-2 text-gray-900 dark:text-white tracking-tight">Invite Guests</h3>
                            <p className="text-[13px] text-gray-500 dark:text-white/50 mb-6 font-medium leading-relaxed">The sanctuary is better with friends. Copy the link below.</p>
                            <Button variant="glass" fullWidth icon={<LinkIcon className="w-4 h-4" />} className="rounded-xl py-4 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 shadow-sm dark:shadow-none">
                                <span className="font-bold">Generate Link</span>
                            </Button>
                        </section>

                        <section className="bg-white/90 dark:bg-black/40 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl dark:shadow-2xl flex-grow flex flex-col transition-colors">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-[11px] font-black text-gray-400 dark:text-white/40 tracking-[0.2em] uppercase">VIEWER METRICS</h3>
                                <span className="bg-brand-50 dark:bg-white/10 text-brand-600 dark:text-white px-2 py-1 rounded-md text-[10px] font-bold border border-brand-100 dark:border-transparent">4 ONLINE</span>
                            </div>

                            <div className="flex-grow space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                                <ParticipantItem name="Sarah Jenkins" status="Watching" avatar="https://i.pravatar.cc/100?img=47" isHost />
                                <ParticipantItem name="Marcus Thorne" status="Buffering..." avatar="https://i.pravatar.cc/100?img=12" />
                                <ParticipantItem name="David Kim" status="Just Joined" avatar="https://i.pravatar.cc/100?img=33" hasMenu />
                                <ParticipantItem name="Lucas Grey" status="Watching" avatar="https://i.pravatar.cc/100?img=15" />
                            </div>

                            <button className="w-full mt-6 py-4 text-[10px] font-black tracking-widest text-brand-600 dark:text-brand-500 bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 rounded-xl hover:bg-brand-500 hover:text-white dark:hover:text-black hover:shadow-[0_4px_15px_rgba(51,188,161,0.2)] dark:hover:shadow-[0_0_15px_rgba(51,188,161,0.5)] transition-all">
                                MANAGE PERMISSIONS
                            </button>
                        </section>
                    </div>
                </div>

            </main>
        </div>
    );
};

const ParticipantItem = ({ name, status, avatar, isHost = false, hasMenu = false }: { name: string, status: string, avatar: string, isHost?: boolean, hasMenu?: boolean }) => (
    <div className="flex items-center p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent hover:border-gray-300 dark:hover:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all group backdrop-blur-sm shadow-sm dark:shadow-none">
        <div className="w-10 h-10 rounded-xl overflow-hidden mr-3 shadow-sm dark:shadow-md bg-gray-200 dark:bg-black/50">
            <img src={avatar} alt={name} className="w-full h-full object-cover transition duration-300" />
        </div>
        <div className="flex-grow">
            <div className="flex items-center space-x-2">
                <span className="text-[14px] font-bold text-gray-900 dark:text-white tracking-tight">{name}</span>
                {isHost && <span className="bg-brand-500 text-white dark:text-black text-[9px] font-black px-1.5 py-0.5 rounded shadow-[0_2px_5px_rgba(51,188,161,0.3)] dark:shadow-sm tracking-widest uppercase">HOST</span>}
            </div>
            <div className="flex items-center space-x-1.5 mt-0.5">
                <div className={`w-1.5 h-1.5 rounded-full shadow-sm ${status === 'Buffering...' ? 'bg-amber-400 animate-pulse' : 'bg-brand-500'}`}></div>
                <span className="text-[10px] font-bold text-gray-500 dark:text-white/50 uppercase tracking-wider">{status}</span>
            </div>
        </div>
        {hasMenu && (
            <button className="text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white p-2 transition-colors">
                <SettingsIcon className="w-4 h-4" />
            </button>
        )}
    </div>
);

export default HostControlCenter;
