import { useTheme } from '../components/theme-provider';
import { useToast } from '../components/ui/ToastProvider';
import { Moon, Sun, Monitor, Bell, Shield, CreditCard, Blocks, LogOut, ChevronRight } from 'lucide-react';

const SettingsPage = () => {
    const { theme, setTheme } = useTheme();
    const { addToast } = useToast();

    return (
        <div className="min-h-screen relative transition-colors duration-300 pb-20">
            <main className="px-6 md:px-12 py-12 md:py-20 max-w-4xl mx-auto pt-24 md:pt-32">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3">Settings</h1>
                    <p className="text-gray-500 font-medium">Manage your preferences, account details, and viewing experience.</p>
                </header>

                <div className="space-y-12">
                    {/* Theme Settings */}
                    <section>
                        <h2 className="text-sm font-black text-gray-400 dark:text-gray-500 tracking-[0.15em] uppercase mb-6">Appearance</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button
                                onClick={() => { setTheme("light"); addToast('Light theme applied', 'success'); }}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${theme === 'light' ? 'border-brand-500 bg-brand-500/10 shadow-lg' : 'border-gray-200 dark:border-white/5 bg-white dark:bg-[#121214] hover:border-gray-300 dark:hover:border-white/10 shadow-sm'}`}
                            >
                                <Sun className={`w-8 h-8 mb-4 transition-colors ${theme === 'light' ? 'text-brand-600 dark:text-brand-500' : 'text-gray-400 dark:text-gray-500'}`} />
                                <span className={`font-bold ${theme === 'light' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Light</span>
                            </button>

                            <button
                                onClick={() => { setTheme("dark"); addToast('Dark theme applied', 'success'); }}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${theme === 'dark' ? 'border-brand-500 bg-brand-500/10 shadow-lg' : 'border-gray-200 dark:border-white/5 bg-white dark:bg-[#121214] hover:border-gray-300 dark:hover:border-white/10 shadow-sm'}`}
                            >
                                <Moon className={`w-8 h-8 mb-4 transition-colors ${theme === 'dark' ? 'text-brand-500' : 'text-gray-400 dark:text-gray-500'}`} />
                                <span className={`font-bold ${theme === 'dark' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Dark</span>
                            </button>

                            <button
                                onClick={() => { setTheme("system"); addToast('System theme applied', 'success'); }}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ${theme === 'system' ? 'border-brand-500 bg-brand-500/10 shadow-lg' : 'border-gray-200 dark:border-white/5 bg-white dark:bg-[#121214] hover:border-gray-300 dark:hover:border-white/10 shadow-sm'}`}
                            >
                                <Monitor className={`w-8 h-8 mb-4 transition-colors ${theme === 'system' ? 'text-brand-600 dark:text-brand-500' : 'text-gray-400 dark:text-gray-500'}`} />
                                <span className={`font-bold ${theme === 'system' ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>System</span>
                            </button>
                        </div>
                    </section>

                    {/* Account Settings List */}
                    <section>
                        <h2 className="text-sm font-black text-gray-400 dark:text-gray-500 tracking-[0.15em] uppercase mb-6">Account</h2>
                        <div className="bg-white dark:bg-[#121214] rounded-3xl border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-2xl overflow-hidden">
                            <SettingsRow icon={<Bell size={20} />} label="Notifications" />
                            <SettingsRow icon={<Shield size={20} />} label="Privacy & Shared" />
                            <SettingsRow icon={<CreditCard size={20} />} label="Billing & Plan" />
                            <SettingsRow icon={<Blocks size={20} />} label="Integrations" border={false} />
                        </div>
                    </section>

                    {/* Danger Zone */}
                    <section>
                        <button className="w-full text-left p-4 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-500 font-bold rounded-2xl flex items-center gap-3 transition duration-300 hover:bg-red-100 dark:hover:bg-red-500/20">
                            <div className="w-10 h-10 bg-white dark:bg-black/20 rounded-xl flex items-center justify-center shadow-sm">
                                <LogOut size={18} />
                            </div>
                            Sign Out of All Devices
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
};

const SettingsRow = ({ icon, label, border = true }: { icon: React.ReactNode, label: string, border?: boolean }) => (
    <button className={`w-full p-4 flex items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition duration-300 group ${border ? 'border-b border-gray-100 dark:border-white/5' : ''}`}>
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-100 dark:bg-black/40 rounded-xl flex items-center justify-center text-gray-500 group-hover:text-brand-500 transition-colors">
                {icon}
            </div>
            <span className="font-bold text-sm">{label}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-300" />
    </button>
);

export default SettingsPage;
