import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import JoinCreateRoom from "./pages/JoinCreateRoom";
import WatchPartyRoom from "./pages/WatchPartyRoom";
import HostControlCenter from "./pages/HostControlCenter";
import DiscoverPage from "./pages/DiscoverPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import Navigation from "./components/Navigation";
import GlobalChat from "./components/GlobalChat";
import { ThemeProvider } from "./components/theme-provider";

function AppContent() {
  const location = useLocation();
  const isRoomPage = location.pathname.startsWith('/room');

  return (
    <div className="dark:bg-black bg-gray-100 min-h-screen font-sans selection:bg-brand-500 selection:text-black flex flex-col md:flex-row overflow-x-hidden transition-colors duration-300">
      {!isRoomPage && <Navigation />}
      {!isRoomPage && <GlobalChat />}

      <main className="flex-grow relative">
        <div className="w-full">
          <div className={!isRoomPage ? 'bg-white dark:bg-[#0f0f11] text-gray-900 dark:text-white w-full min-h-screen relative transition-colors duration-300' : 'w-full h-full'}>

            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
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
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
