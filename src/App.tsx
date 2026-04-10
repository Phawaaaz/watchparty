import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import JoinCreateRoom from "./pages/JoinCreateRoom";
import WatchPartyRoom from "./pages/WatchPartyRoom";
import HostControlCenter from "./pages/HostControlCenter";
import DiscoverPage from "./pages/DiscoverPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import AuthPage from "./pages/AuthPage";
import Navigation from "./components/Navigation";
import GlobalChat from "./components/GlobalChat";
import { ThemeProvider } from "./components/theme-provider";
import { ToastProvider } from "./components/ui/ToastProvider";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isFullscreenPage = location.pathname.startsWith('/room') || isAuthPage;
  const animationKey = isAuthPage ? 'auth-flow' : location.pathname;

  return (
    <div className="dark:bg-black bg-gray-100 min-h-screen font-sans selection:bg-brand-500 selection:text-black flex flex-col md:flex-row overflow-x-hidden transition-colors duration-300">
      {!isFullscreenPage && <Navigation />}
      {!isFullscreenPage && <GlobalChat />}

      <main className="flex-grow relative">
        <div className="w-full">
          <div className={!isFullscreenPage ? 'bg-white dark:bg-[#0f0f11] text-gray-900 dark:text-white w-full min-h-screen relative transition-colors duration-300' : 'w-full h-full'}>

            <AnimatePresence mode="wait">
              <motion.div
                key={animationKey}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Routes location={location}>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/login" element={<AuthPage mode="login" />} />
                  <Route path="/signup" element={<AuthPage mode="signup" />} />
                  <Route path="/join" element={<JoinCreateRoom />} />
                  <Route path="/room/:roomId" element={<WatchPartyRoom />} />
                  <Route path="/room/:roomId/host" element={<HostControlCenter />} />
                </Routes>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ToastProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
