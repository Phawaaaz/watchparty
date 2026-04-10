import { NavLink, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Home, Compass, Users, User, Settings, PlaySquare } from 'lucide-react';
import { cn } from '../lib/utils';

const Navigation = () => {
    return (
        <>
            {/* Mobile Bottom Nav */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white/90 dark:bg-black/60 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-full flex justify-around py-3 px-4 z-50 animate-slide-up shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-colors duration-300">
                <MobileNavItem to="/" icon={<Home size={22} />} label="HOME" />
                <MobileNavItem to="/discover" icon={<Compass size={22} />} label="DISCOVER" />
                <MobileNavItem to="/join" icon={<Users size={22} />} label="PARTIES" />
                <MobileNavItem to="/profile" icon={<User size={22} />} label="PROFILE" />
            </div>

            {/* Desktop Top Nav */}
            <nav className="hidden md:flex fixed top-4 inset-x-4 lg:inset-x-12 max-w-[1200px] mx-auto bg-white/80 dark:bg-[#121214]/80 backdrop-blur-3xl h-16 rounded-full border border-gray-200 dark:border-white/5 z-50 animate-fade-in text-gray-500 dark:text-white/70 justify-between items-center px-4 shadow-sm dark:shadow-2xl overflow-hidden transition-colors duration-300">
                {/* Subtle bottom edge glow */}
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

                {/* Left - Logo Area */}
                <div className="flex items-center space-x-3 text-gray-900 dark:text-white group cursor-pointer transition-transform hover:scale-105 duration-300 ml-2">
                    <div className="w-8 h-8 bg-brand-500 rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-[0_4px_10px_rgba(51,188,161,0.3)] dark:shadow-[0_0_15px_rgba(51,188,161,0.4)] transition-shadow">
                        <PlaySquare className="text-white dark:text-black w-4 h-4 fill-current transition-colors" />
                    </div>
                    <span className="font-black text-lg tracking-tighter text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-md hidden lg:block transition-colors">WatchParty</span>
                </div>

                {/* Center - Main Links */}
                <div className="flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
                    <DesktopNavItem to="/" icon={<Home size={18} />} label="Home" />
                    <DesktopNavItem to="/discover" icon={<Compass size={18} />} label="Discover" />
                    <DesktopNavItem to="/join" icon={<Users size={18} />} label="Parties" />
                </div>

                {/* Right - Profile & Settings */}
                <div className="flex items-center space-x-1 mr-2">
                    <DesktopNavItem to="/profile" icon={<User size={18} />} label="Profile" />
                    <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2 transition-colors duration-300" />
                    <DesktopNavItem to="/settings" icon={<Settings size={18} />} label="" />
                </div>
            </nav>
        </>
    );
};

const MobileNavItem = ({ to, icon, label }: { to: string, icon: ReactNode, label: string }) => (
    <NavLink to={to} className={({ isActive }) => cn(
        "flex flex-col items-center space-y-1 p-2 rounded-2xl transition-all duration-300",
        isActive ? "text-brand-500 scale-110 shadow-[0_0_15px_rgba(51,188,161,0.2)]" : "text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white"
    )}>
        {icon}
        <span className="text-[9px] font-bold tracking-widest">{label}</span>
    </NavLink>
);

const DesktopNavItem = ({ to, icon, label }: { to: string, icon: ReactNode, label: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink to={to} className={cn(
            "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group relative",
            isActive
                ? "text-gray-900 dark:text-white font-bold"
                : "text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white font-medium",
            !label && "px-2"
        )}>
            {/* Active Background Glow */}
            {isActive && (
                <div className="absolute inset-0 bg-brand-500/10 border border-brand-500/20 rounded-full -z-10" />
            )}
            {/* Hover Background */}
            {!isActive && (
                <div className="absolute inset-0 bg-gray-100 dark:bg-white/[0.03] opacity-0 group-hover:opacity-100 rounded-full -z-10 transition-opacity" />
            )}

            <div className={cn(
                "flex items-center justify-center transition-all duration-300 shrink-0",
                isActive ? "text-brand-600 dark:text-brand-500" : "group-hover:text-gray-900 dark:group-hover:text-white"
            )}>
                {icon}
            </div>
            {label && (
                <span className="text-[14px] tracking-wide truncate">{label}</span>
            )}
        </NavLink>
    );
};

export default Navigation;
