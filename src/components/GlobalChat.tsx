import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Users, Circle } from 'lucide-react';

const GlobalChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const chatVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
        exit: { x: "100%", opacity: 0, transition: { ease: "easeInOut" as const } }
    };

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-24 md:bottom-8 right-6 z-50 w-14 h-14 bg-brand-500 text-black rounded-full shadow-[0_4px_20px_rgba(51,188,161,0.4)] flex items-center justify-center hover:bg-brand-400 transition-colors"
                >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-brand-500 rounded-full"></span>
                </motion.button>
            )}

            {/* Chat Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={chatVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white dark:bg-[#0f0f11] shadow-2xl z-[100] flex flex-col border-l border-gray-200 dark:border-white/10"
                    >
                        {/* Header */}
                        <header className="px-6 py-5 border-b border-gray-200 dark:border-white/5 flex items-center justify-between bg-gray-50 dark:bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center">
                                    <Users className="w-5 h-5 text-brand-600 dark:text-brand-500" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white leading-tight">Global Lounge</h3>
                                    <p className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                                        <Circle className="w-2 h-2 text-brand-500 fill-brand-500" /> 1,248 Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </header>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-white dark:bg-[#0f0f11]">

                            <div className="flex items-start gap-4">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-8 h-8 rounded-full shadow-sm" />
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-sm text-gray-900 dark:text-white">Neo</span>
                                        <span className="text-[10px] text-gray-400">2 mins ago</span>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white/80 p-3 rounded-2xl rounded-tl-sm text-sm border border-transparent dark:border-white/5">
                                        Anyone watching the new Matrix premiere?
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 flex-row-reverse">
                                <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" className="w-8 h-8 rounded-full shadow-sm" />
                                <div className="flex flex-col items-end">
                                    <div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
                                        <span className="font-bold text-sm text-brand-600 dark:text-brand-500">You</span>
                                        <span className="text-[10px] text-gray-400">Just now</span>
                                    </div>
                                    <div className="bg-brand-500 text-black p-3 rounded-2xl rounded-tr-sm text-sm font-medium shadow-[0_4px_15px_rgba(51,188,161,0.2)]">
                                        Yeah I'm in room #MATRIX-VIP! Join up!
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <img src="https://i.pravatar.cc/100?img=47" alt="Avatar" className="w-8 h-8 rounded-full shadow-sm" />
                                <div>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="font-bold text-sm text-gray-900 dark:text-white">Trinity</span>
                                        <span className="text-[10px] text-gray-400">Just now</span>
                                    </div>
                                    <div className="bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white/80 p-3 rounded-2xl rounded-tl-sm text-sm border border-transparent dark:border-white/5">
                                        Omw 🏃‍♀️
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-gray-50 dark:bg-[#121214] border-t border-gray-200 dark:border-white/5">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (message.trim()) setMessage("");
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-sm transition-all placeholder-gray-400 dark:placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!message.trim()}
                                    className="w-11 h-11 bg-brand-500 text-black rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-brand-400 shadow-[0_2px_10px_rgba(51,188,161,0.3)]"
                                >
                                    <Send className="w-5 h-5 -ml-0.5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[90] md:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default GlobalChat;
