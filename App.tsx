
import React from 'react';
import { LOGO_URL, WHATSAPP_GROUP_LINK } from './constants';
import { WhatsAppIcon } from './components/WhatsAppIcon';
const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 font-sans antialiased">
      <div className="w-full max-w-lg mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        <div className="p-8 sm:p-12 text-center">
          <header className="mb-8">
            <img 
              // src="https://pumotechnovation.com/assets/logo/pumo-technovation-logo.webp"  
              src = {LOGO_URL}
              alt="Pumo Technovation Logo" 
              className="w-4/5 max-w-xs mx-auto"
            />
          </header>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 tracking-tight">
              You're All Set! Thank You for Enrolling.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-md mx-auto">
              Your spot is confirmed! Please join our exclusive WhatsApp group for the webinar link, important updates, and a Q&A session.
            </p>
          </div>

          <div className="mt-12">
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto text-lg sm:text-xl font-bold text-slate-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-lg px-8 py-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl shadow-yellow-500/30"
            >
              <WhatsAppIcon />
              Join Our WhatsApp Group
            </a>
            <p className="text-xs text-slate-500 mt-4">Clicking will open WhatsApp</p>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-4 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Pumo Technovation. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;
